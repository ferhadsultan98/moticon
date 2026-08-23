/**
 * Prepends `"use client";` to any src/icons/*.tsx that's missing it.
 *
 * generate-exports.mjs treats a missing directive as a hard build failure
 * (fail loud, don't ship a broken RSC import) — this script is the fix:
 * run it once after adding new icon files and it patches only the ones
 * that need it, leaving everything else untouched.
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "src", "icons");

const files = readdirSync(iconsDir).filter((f) => f.endsWith(".tsx"));
let patched = 0;

for (const file of files) {
  const path = join(iconsDir, file);
  const source = readFileSync(path, "utf-8");
  if (/^"use client";/.test(source)) continue;

  writeFileSync(path, `"use client";\n\n${source.replace(/^\s*\n/, "")}`);
  patched++;
  console.log(`[inject-use-client] patched ${file}`);
}

console.log(
  patched === 0
    ? "[inject-use-client] all icons already have \"use client\" — nothing to do"
    : `[inject-use-client] patched ${patched} icon(s)`
);
