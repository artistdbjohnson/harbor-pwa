import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

function walkFiles(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walkFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

function isCompleteImage(buf, outPath) {
  if (!Buffer.isBuffer(buf) || buf.length < 32) return false;
  const lower = String(outPath).toLowerCase();
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) {
    return (
      buf.length > 1024 &&
      buf[0] === 0xff &&
      buf[1] === 0xd8 &&
      buf[2] === 0xff &&
      buf[buf.length - 2] === 0xff &&
      buf[buf.length - 1] === 0xd9
    );
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
  const b64 = parts.map((p) => readFileSync(p, "utf8")).join("");
  const buf = decodeB64(b64);
  if (!isCompleteImage(buf, out)) {
    console.log(
      "skip-chunks-invalid-image",
      out,
      "parts",
      parts.length,
      "bytes",
      buf.length
    );
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
  const buf = decodeB64(readFileSync(full, "utf8"));
  if (!isCompleteImage(buf, out)) {
    console.log("skip-single-invalid-image", full, buf.length);
    continue;
  }
  writeFileSync(out, buf);
  console.log("decoded", full, buf.length, "->", out);
}
