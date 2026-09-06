import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

function walkFiles(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

function hasJpegSoi(buf) {
  return Buffer.isBuffer(buf) && buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
}

function hasJpegEoi(buf) {
  return Buffer.isBuffer(buf) && buf.length >= 2 && buf[buf.length - 2] === 0xff && buf[buf.length - 1] === 0xd9;
}

function isCompleteImage(buf, outPath) {
  if (!Buffer.isBuffer(buf) || buf.length < 32) return false;
  const lower = String(outPath).toLowerCase();
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) {
    return buf.length > 1024 && hasJpegSoi(buf) && hasJpegEoi(buf);
  }
  if (lower.endsWith(".png")) {
    return (
      buf[0] === 0x89 &&
      buf[1] === 0x50 &&
      buf[2] === 0x4e &&
      buf[3] === 0x47 &&
      buf.includes(Buffer.from("IEND"))
    );
  }
  return buf.length > 16;
}

const MIN_GOOD_JPEG = 40000;

function isGoodJpeg(buf) {
  return isCompleteImage(buf, "x.jpg") && buf.length >= MIN_GOOD_JPEG;
}

function decodeB64(text) {
  return Buffer.from(String(text).replace(/\s+/g, ""), "base64");
}

function chunksAreContiguous(parts) {
  const suffixes = parts.map((p) => p.slice(p.lastIndexOf(".") + 1));
  if (!suffixes.length) return false;
  const expected = [];
  let code = "aa".charCodeAt(1);
  let first = "a".charCodeAt(0);
  for (let i = 0; i < suffixes.length; i++) {
    expected.push(String.fromCharCode(first) + String.fromCharCode(code));
    code += 1;
    if (code > 122) {
      code = 97;
      first += 1;
    }
  }
  return suffixes.every((s, i) => s === expected[i]);
}

function readExisting(path) {
  try {
    if (!existsSync(path)) return null;
    return readFileSync(path);
  } catch {
    return null;
  }
}

const publicDir = join(process.cwd(), "public");
const files = walkFiles(publicDir);

const groups = new Map();
for (const full of files) {
  const m = full.match(/^(.*)\.b64\.([a-z]{2})$/);
  if (!m) continue;
  if (!groups.has(m[1])) groups.set(m[1], []);
  groups.get(m[1]).push(full);
}

const chunkedOut = new Set();
for (const [out, parts] of groups) {
  parts.sort();
  if (!chunksAreContiguous(parts)) {
    console.log("skip-chunks-gap", out, parts.length);
    continue;
  }
  let buf;
  try {
    buf = decodeB64(parts.map((p) => readFileSync(p, "utf8")).join(""));
  } catch (err) {
    console.log("skip-chunks-decode-error", out, String(err));
    continue;
  }
  if (!isCompleteImage(buf, out)) {
    console.log("skip-chunks-invalid-image", out, "parts", parts.length, "bytes", buf.length);
    continue;
  }
  writeFileSync(out, buf);
  chunkedOut.add(out);
  console.log("decoded-chunks", parts.length, buf.length, "->", out);
}

for (const full of files) {
  if (!full.endsWith(".b64")) continue;
  const out = full.slice(0, -4);
  if (chunkedOut.has(out)) {
    console.log("skip-single", full, "(chunks win)");
    continue;
  }
  let buf;
  try {
    buf = decodeB64(readFileSync(full, "utf8"));
  } catch (err) {
    console.log("skip-single-decode-error", full, String(err));
    continue;
  }
  if (isCompleteImage(buf, out)) {
    writeFileSync(out, buf);
    console.log("decoded", full, buf.length, "->", out);
    continue;
  }
  const lower = String(out).toLowerCase();
  if ((lower.endsWith(".jpg") || lower.endsWith(".jpeg")) && hasJpegSoi(buf) && buf.length > 512) {
    writeFileSync(out, buf);
    console.log("decoded-degraded-jpeg", full, buf.length, "->", out);
    continue;
  }
  if (lower.endsWith(".png") && buf[0] === 0x89 && buf[1] === 0x50 && buf.length > 32) {
    writeFileSync(out, buf);
    console.log("decoded-degraded-png", full, buf.length, "->", out);
    continue;
  }
  console.log("skip-single-invalid-image", full, buf.length);
}

const REMOTE_STILLS = {
  "campaign-hero.jpg": "https://litter.catbox.moe/4qpxbq.jpg",
  "campaign-mid.jpg": "https://litter.catbox.moe/k60xkb.jpg",
  "campaign-light.jpg": "https://litter.catbox.moe/koc2iq.jpg",
  "campaign-future.jpg": "https://litter.catbox.moe/nd65pk.jpg",
  "campaign-fishing.jpg": "https://litter.catbox.moe/3ffj6g.jpg",
  "campaign-grad-hs.jpg": "https://litter.catbox.moe/2oltkw.jpg",
  "campaign-grades.jpg": "https://litter.catbox.moe/ruxsea.jpg",
  "campaign-grad-college.jpg": "https://litter.catbox.moe/1rjxfs.jpg",
  "campaign-play.jpg": "https://litter.catbox.moe/ms4n55.jpg",
  "campaign-table.jpg": "https://litter.catbox.moe/ky45a6.jpg",
  "campaign-ballet.jpg": "https://litter.catbox.moe/r1zmgo.jpg",
  "campaign-teeball.jpg": "https://litter.catbox.moe/xf5fdj.jpg",
};

async function hydrateFromRemote() {
  for (const [name, url] of Object.entries(REMOTE_STILLS)) {
    const out = join(publicDir, name);
    const existing = readExisting(out);
    if (existing && isGoodJpeg(existing)) {
      console.log("keep-good-local", name, existing.length);
      continue;
    }
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log("remote-fetch-fail", name, res.status);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (!isGoodJpeg(buf)) {
        console.log("remote-fetch-invalid", name, buf.length);
        continue;
      }
      writeFileSync(out, buf);
      console.log("hydrated-remote", name, buf.length, "<-", url);
    } catch (err) {
      console.log("remote-fetch-error", name, String(err));
    }
  }
}

await hydrateFromRemote();
