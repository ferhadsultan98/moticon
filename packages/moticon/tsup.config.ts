import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    external: ["react", "motion"],
    banner: {
      js: '"use client";',
    },
  },
  {
    // Metadata registry only — no "use client" banner, safe to import
    // from React Server Components.
    entry: { registry: "src/registry.ts" },
    format: ["esm", "cjs"],
    dts: true,
    clean: false,
  },
]);
