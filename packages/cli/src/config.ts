import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

/**
 * moticon.json — project-level CLI config. Written on first `moticon init` (or
 * auto-created by `moticon add`), read on every command afterwards. Kept
 * deliberately small; new keys must default sensibly so old configs keep working.
 */
export interface MoticonConfig {
  /** Directory (relative to cwd) icon components are written into. */
  output: string;
  /** Emit .tsx (true) or .jsx (false). */
  typescript: boolean;
  /** Overwrite existing files without prompting. */
  overwrite?: boolean;
}

export const CONFIG_FILE = "moticon.json";

export const DEFAULT_CONFIG: MoticonConfig = {
  output: "components/moticon",
  typescript: true,
};

export function configPath(cwd = process.cwd()): string {
  return join(cwd, CONFIG_FILE);
}

export function readConfig(cwd = process.cwd()): MoticonConfig {
  const p = configPath(cwd);
  if (!existsSync(p)) return { ...DEFAULT_CONFIG };
  try {
    const parsed = JSON.parse(readFileSync(p, "utf-8")) as Partial<MoticonConfig>;
    return { ...DEFAULT_CONFIG, ...parsed };
  } catch {
    throw new Error(`${CONFIG_FILE} is not valid JSON`);
  }
}

export function writeConfig(config: MoticonConfig, cwd = process.cwd()): string {
  const p = configPath(cwd);
  writeFileSync(p, JSON.stringify(config, null, 2) + "\n");
  return p;
}

export function configExists(cwd = process.cwd()): boolean {
  return existsSync(configPath(cwd));
}

export function outputDir(config: MoticonConfig, cwd = process.cwd()): string {
  return resolve(cwd, config.output);
}
