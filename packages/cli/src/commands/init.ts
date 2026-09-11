import { relative } from "node:path";
import { existsSync } from "node:fs";
import { DEFAULT_CONFIG, writeConfig, configPath, readConfig } from "../config.js";
import { c, sym, line } from "../ui.js";

interface InitOptions {
  outDir?: string;
  jsx?: boolean;
  force?: boolean;
}

export function init(opts: InitOptions) {
  const path = configPath();
  if (existsSync(path) && !opts.force) {
    const current = readConfig();
    line(`${sym.bullet} ${c.dim(relative(process.cwd(), path) + " already exists")}`);
    line(`  output:     ${c.cyan(current.output)}`);
    line(`  typescript: ${c.cyan(String(current.typescript))}`);
    line(c.dim("  pass --force to overwrite"));
    return;
  }

  const config = {
    ...DEFAULT_CONFIG,
    ...(opts.outDir ? { output: opts.outDir } : {}),
    ...(opts.jsx ? { typescript: false } : {}),
  };
  writeConfig(config);
  line(`${sym.ok} wrote ${c.dim(relative(process.cwd(), path))}`);
  line(`  output:     ${c.cyan(config.output)}`);
  line(`  typescript: ${c.cyan(String(config.typescript))}`);
  line();
  line(c.dim("next: ") + c.cyan("moticon add bell"));
}
