import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "public");
for (const name of readdirSync(dir)) {
  if (!name.endsWith(".jpg.b64")) continue;
  const out = join(dir, name.replace(/\.b64$/, ""));
  writeFileSync(out, Buffer.from(readFileSync(join(dir, name), "utf8"), "base64"));
  console.log("decoded", name, "->", out);
}
