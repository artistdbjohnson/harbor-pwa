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
  const b64 = parts.map((p) => readFileSync(p, "utf8").replace(/\s+/g, "")).join("");
  const buf = Buffer.from(b64, "base64");
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
  const buf = Buffer.from(readFileSync(full, "utf8").replace(/\s+/g, ""), "base64");
  writeFileSync(out, buf);
  console.log("decoded", full, buf.length, "->", out);
}
