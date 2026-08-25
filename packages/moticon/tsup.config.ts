import { defineConfig } from "tsup";

const target = process.env.TSUP_TARGET;
const format = process.env.TSUP_FORMAT as "esm" | "cjs" | undefined;

const componentsConfig = {
  entry: { index: "src/index.ts" },
  format: [format ?? "esm"] as const,
  dts: format === "esm" || !format,
  clean: format === "esm" || !format,
  external: ["react", "motion"],
  banner: {
    js: '"use client";',
  },
};

const registryConfig = {
  // Metadata registry only — no "use client" banner, safe to import
  // from React Server Components.
  entry: { registry: "src/registry.ts" },
  format: [format ?? "esm"] as const,
  dts: format === "esm" || !format,
  clean: false,
};

// Built as several sequential single-format tsup invocations (see
// package.json's "build" script), not one multi-entry, multi-format config.
// esbuild has a real, reproducible bug walking src/icons/ (328 files) when
// this package is built with more than one of {entry, format} running
// concurrently — it intermittently throws "Cannot read file
// src/icons/package.json", confirmed in a clean Linux container (not just
// on Vercel, and not a Windows-vs-Linux artifact). Every build step here
// touches src/icons/ alone, one at a time.
export default defineConfig(
  target === "registry" ? registryConfig : componentsConfig
);
