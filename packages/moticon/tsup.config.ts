import { defineConfig } from "tsup";

const target = process.env.TSUP_TARGET;

const componentsConfig = {
  entry: { index: "src/index.ts" },
  format: ["esm", "cjs"] as const,
  dts: true,
  clean: true,
  external: ["react", "motion"],
  banner: {
    js: '"use client";',
  },
};

const registryConfig = {
  // Metadata registry only — no "use client" banner, safe to import
  // from React Server Components.
  entry: { registry: "src/registry.ts" },
  format: ["esm", "cjs"] as const,
  dts: true,
  clean: false,
};

// Built as two separate tsup invocations (see package.json's "build"
// script), not two entries in one multi-entry config: the components build
// carries a "use client" banner and the registry build must not, and
// running them together as one array has been flaky in CI (esbuild
// intermittently fails to resolve files inside src/icons/). TSUP_TARGET
// selects which one this invocation builds.
export default defineConfig(
  target === "registry" ? registryConfig : componentsConfig
);
