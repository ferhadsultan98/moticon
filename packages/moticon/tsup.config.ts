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
// script), not two entries in one multi-entry config array. Running them
// together is fine locally on Windows, but reliably fails on Vercel's Linux
// build machine with "Cannot read file src/icons/package.json" — both
// builds walk src/icons/ (328 files) at once and esbuild's file-system
// layer races on it there. TSUP_TARGET selects which one this invocation
// builds; package.json's "build" script runs them one after another.
export default defineConfig(
  target === "registry" ? registryConfig : componentsConfig
);
