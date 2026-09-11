import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { getSource, resolveNames } from "../catalog.js";
import { readConfig, writeConfig, configExists, outputDir, DEFAULT_CONFIG } from "../config.js";
import { c, sym, line, fail } from "../ui.js";

interface AddOptions {
  outDir?: string;
  overwrite?: boolean;
  jsx?: boolean;
}

const PROPS_TYPE = `interface MoticonIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}`;

/**
 * The shipped components import their props type from a shared "./types"
 * module. Copied-out components must be self-contained, so inline that type
 * (tsx) or drop it entirely (jsx).
 */
function inlineTypes(source: string): string {
  return source
    .replace(
      /^import\s+type\s+\{\s*MoticonIconProps\s*\}\s+from\s+["']\.\/types["'];?\s*$/m,
      `\n${PROPS_TYPE}\n`,
    )
    .replace(/\n{3,}/g, "\n\n");
}

/** Strip all TS so the component is valid .jsx. */
function toJsx(source: string): string {
  return source
    .replace(/^import\s+type\s+\{[^}]*\}\s+from\s+["'][^"']+["'];?\s*$/m, "")
    .replace(/:\s*MoticonIconProps/g, "")
    .replace(/\n{3,}/g, "\n\n");
}

export function add(names: string[], opts: AddOptions) {
  if (names.length === 0) {
    fail(`nothing to add. Try: ${c.cyan("moticon add bell heart")}`);
  }

  const { found, missing } = resolveNames(names);

  for (const m of missing) {
    process.stderr.write(`${sym.err} no icon "${c.bold(m.query)}"`);
    if (m.suggestions.length) {
      process.stderr.write(c.dim(` — did you mean: ${m.suggestions.join(", ")}?`));
    }
    process.stderr.write("\n");
  }
  if (found.length === 0) process.exit(1);

  // Load or bootstrap config.
  let config = readConfig();
  const hadConfig = configExists();
  if (opts.outDir) config = { ...config, output: opts.outDir };
  if (opts.jsx) config = { ...config, typescript: false };
  if (opts.overwrite) config = { ...config, overwrite: true };

  const dir = outputDir(config);
  mkdirSync(dir, { recursive: true });

  const ext = config.typescript ? "tsx" : "jsx";
  let written = 0;
  let skipped = 0;

  for (const meta of found) {
    const source = getSource(meta.name);
    if (!source) {
      process.stderr.write(`${sym.err} ${meta.name}: source not found in @moticon/react\n`);
      continue;
    }
    const filePath = join(dir, `${meta.name}.${ext}`);
    if (existsSync(filePath) && !config.overwrite) {
      line(`${c.yellow("skip")} ${relative(process.cwd(), filePath)} ${c.dim("(exists — pass --overwrite)")}`);
      skipped++;
      continue;
    }
    const out = config.typescript ? inlineTypes(source) : toJsx(source);
    writeFileSync(filePath, out);
    line(`${sym.ok} ${relative(process.cwd(), filePath)} ${c.dim(meta.mechanic + " · " + meta.trigger)}`);
    written++;
  }

  // Persist config so the next `add` reuses the same output dir.
  if (!hadConfig && written > 0) {
    const path = writeConfig(config);
    line(`${sym.bullet} wrote ${c.dim(relative(process.cwd(), path))}`);
  }

  line();
  if (written > 0) {
    line(
      `${c.bold(String(written))} icon${written === 1 ? "" : "s"} added` +
        (skipped ? c.dim(`, ${skipped} skipped`) : ""),
    );
    line(c.dim("These components need ") + c.cyan("motion") + c.dim(" installed:"));
    line("  " + c.cyan("npm install motion"));
  } else if (skipped > 0) {
    line(c.dim(`${skipped} skipped, nothing written`));
  }
}

export { DEFAULT_CONFIG };
