import { cpSync } from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "node20",
  dts: false,
  clean: true,
  banner: { js: "#!/usr/bin/env node" },
  // The catalog artifact is read at runtime relative to the bundle.
  onSuccess: async () => {
    cpSync("src/generated/icon-data.json", "dist/generated/icon-data.json", {
      recursive: true,
    });
  },
});
