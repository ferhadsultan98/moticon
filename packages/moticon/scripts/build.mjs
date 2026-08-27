/**
 * Build using tsc alone — no esbuild, no bundler.
 *
 * esbuild has a persistent, version-independent bug on Linux CI (confirmed
 * on both Vercel and Netlify, across esbuild 0.28.2 and 0.25.9, with a
 * bare esbuild.build() call and no tsup in between): it throws "Cannot
 * read file src/icons/package.json" while resolving this package's 328
 * icon imports. Never reproduces on Windows. Root cause undetermined, but
 * consistent enough across versions that it's not a one-off regression —
 * so this build no longer uses esbuild at all. tsc compiles every source
 * file to its own output file (no bundling), which is fine here: this
 * package has no bundling-dependent features (no CSS, no code-splitting)
 * and each icon is already a separate module.
 */

import { execSync } from "node:child_process";
import {
  cpSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Rewrites `from "./foo"` / `from "../foo"` (no extension) to
// `from "./foo.js"` in every .js file under dir, recursively — Node's ESM
// loader requires explicit extensions on relative imports, but tsc with
// moduleResolution "bundler" omits them.
function addJsExtensions(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      addJsExtensions(full);
      continue;
    }
    if (!entry.name.endsWith(".js")) continue;
    const content = readFileSync(full, "utf-8");
    const rewritten = content.replace(
      /from\s+["'](\.\.?\/[^"']+)["']/g,
      (match, spec) => (spec.endsWith(".js") ? match : `from "${spec}.js"`)
    );
    if (rewritten !== content) writeFileSync(full, rewritten);
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const esmDir = join(distDir, "esm");
const cjsDir = join(distDir, "cjs");

mkdirSync(distDir, { recursive: true });

function run(cmd) {
  execSync(cmd, { cwd: root, stdio: "inherit" });
}

// ESM build: declarations + .js output in one pass. tsc (with
// moduleResolution "bundler", matching the rest of this repo) emits
// relative imports without extensions — fine for bundlers, but Node's
// native ESM loader requires them. Rewritten below, after compilation.
rmSync(esmDir, { recursive: true, force: true });
run(
  `npx tsc --project tsconfig.json --outDir "${esmDir}" --declaration --module esnext --moduleResolution bundler`
);
addJsExtensions(esmDir);

// CJS build: same source, compiled to CommonJS, no declarations (reuse
// the ESM ones — declaration content is the same regardless of the
// module target).
rmSync(cjsDir, { recursive: true, force: true });
run(
  `npx tsc --project tsconfig.json --outDir "${cjsDir}" --declaration false --module commonjs --moduleResolution node --verbatimModuleSyntax false`
);

// Flatten: package.json "exports" expects dist/index.js, dist/index.cjs,
// dist/index.d.ts, dist/registry.js, dist/registry.cjs, dist/registry.d.ts
// (plus .d.cts copies) — not a nested esm/cjs tree with 328 icon files
// inside. Since nothing outside this package imports icons directly by
// path, only index/registry's own output needs to live at the top level;
// their compiled `require("./icons/Bell")` calls still resolve correctly
// because the whole icons/ tree is compiled in parallel inside esm/ and
// cjs/ respectively.
for (const name of ["index", "registry"]) {
  cpSync(join(esmDir, `${name}.js`), join(distDir, `${name}.js`));
  cpSync(join(esmDir, `${name}.d.ts`), join(distDir, `${name}.d.ts`));
  cpSync(join(esmDir, `${name}.d.ts`), join(distDir, `${name}.d.cts`));
  cpSync(join(cjsDir, `${name}.js`), join(distDir, `${name}.cjs`));
}

// Icons themselves need to live alongside index.js/index.cjs so their
// relative imports ("./icons/Bell") resolve at runtime.
cpSync(join(esmDir, "icons"), join(distDir, "icons"), { recursive: true });
rmSync(join(distDir, "icons-cjs"), { recursive: true, force: true });
cpSync(join(cjsDir, "icons"), join(distDir, "icons-cjs"), { recursive: true });
// The package root's package.json says "type": "module", so Node would
// otherwise try to parse these CommonJS .js files as ESM. A directory-
// scoped package.json marks just this subtree as CommonJS.
cpSync(join(__dirname, "pkg-type-cjs.json"), join(distDir, "icons-cjs", "package.json"));

// Rewrite dist/index.cjs and dist/registry.cjs's relative requires to
// point at the CJS icon tree instead of the ESM one tsc would otherwise
// have them share.
for (const name of ["index", "registry"]) {
  const cjsPath = join(distDir, `${name}.cjs`);
  const content = readFileSync(cjsPath, "utf-8");
  writeFileSync(cjsPath, content.replaceAll('require("./icons/', 'require("./icons-cjs/'));
}

// Prepend "use client" to the component entry's outputs only — the
// registry has no client-only code.
for (const file of ["index.js", "index.cjs"]) {
  const path = join(distDir, file);
  const content = readFileSync(path, "utf-8");
  if (!content.startsWith('"use client"')) {
    writeFileSync(path, `"use client";\n${content}`);
  }
}
for (const file of ["icons"]) {
  // no-op placeholder to keep this loop structure obvious if more
  // client-only trees are added later
  void file;
}

rmSync(esmDir, { recursive: true, force: true });
rmSync(cjsDir, { recursive: true, force: true });

console.log(`Built dist/{index,registry}.{js,cjs,d.ts,d.cts} + dist/icons(-cjs)/`);
