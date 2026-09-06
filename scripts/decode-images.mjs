import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (!name.endsWith(".b64")) continue;
    const out = full.replace(/\.b64$/, "");
    writeFileSync(out, Buffer.from(readFileSync(full, "utf8"), "base64"));
    console.log("decoded", full, "->", out);
  }
}

walk(join(process.cwd(), "public"));
