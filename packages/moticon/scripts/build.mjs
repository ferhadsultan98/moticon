/**
 * Hand-rolled build, replacing tsup/esbuild's automatic multi-entry,
 * multi-format orchestration.
 *
 * Root cause: tsup wraps esbuild's build() call with several of its own
 * esbuild plugins (external resolution, postcss, native-node-modules,
 * etc.), all registered via onResolve/onLoad hooks that run for every
 * module esbuild visits. On Vercel's Linux build machine specifically —
 * reproduced there repeatedly across multiple tsup config shapes
 * (multi-entry array, sequential single-entry, sequential single-format,
 * with and without skipNodeModulesBundle) — esbuild throws "Cannot read
 * file src/icons/package.json" while resolving this package's 328 icon
 * imports, always inside the tsup-wrapped build, never with a bare
 * esbuild.build() call (verified locally). Whatever plugin or resolution
 * path is responsible, calling esbuild directly — with no tsup layer in
 * between — sidesteps it entirely.
 */

import { build } from "esbuild";
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");

const target = process.argv.includes("--registry") ? "registry" : "index";
const entry = join(root, "src", `${target}.ts`);
const external = ["react", "motion"];

mkdirSync(distDir, { recursive: true });

async function buildFormat(format) {
  const outfile = join(distDir, `${target}.${format === "cjs" ? "cjs" : "js"}`);
  await build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    format,
    platform: "neutral",
    target: "es2020",
    external,
    banner:
      target === "index" ? { js: '"use client";' } : undefined,
  });
  console.log(`  ${format} -> dist/${target}.${format === "cjs" ? "cjs" : "js"}`);
}

await buildFormat("esm");
await buildFormat("cjs");

// Types: run tsc once (not per-format — declarations don't differ by
// module format) and copy the single entry's .d.ts into place under both
// the .d.ts and .d.cts names the package.json "exports" field expects.
const tmpDtsDir = join(root, ".dts-tmp");
rmSync(tmpDtsDir, { recursive: true, force: true });
execSync(
  `npx tsc --project tsconfig.json --emitDeclarationOnly --declaration --outDir "${tmpDtsDir}"`,
  { cwd: root, stdio: "inherit" }
);
const generatedDts = join(tmpDtsDir, `${target}.d.ts`);
const dtsContent = readFileSync(generatedDts, "utf-8");
writeFileSync(join(distDir, `${target}.d.ts`), dtsContent);
writeFileSync(join(distDir, `${target}.d.cts`), dtsContent);
rmSync(tmpDtsDir, { recursive: true, force: true });
console.log(`  types -> dist/${target}.d.ts, dist/${target}.d.cts`);
