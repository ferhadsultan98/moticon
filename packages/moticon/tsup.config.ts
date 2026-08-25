import { defineConfig } from "tsup";

const target = process.env.TSUP_TARGET;
const format = process.env.TSUP_FORMAT as "esm" | "cjs" | undefined;

const componentsConfig = {
  entry: { index: "src/index.ts" },
  format: [format ?? "esm"] as const,
  dts: format === "esm" || !format,
  clean: format === "esm" || !format,
  external: ["react", "motion"],
  skipNodeModulesBundle: true,
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
  skipNodeModulesBundle: true,
};

export default defineConfig(
  target === "registry" ? registryConfig : componentsConfig
);
