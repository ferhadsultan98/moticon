/**
 * The trusted workspace root.
 *
 * Resolved ONCE at process startup, never from tool input. A tool caller
 * cannot point the write tool at an arbitrary directory — it can only choose a
 * subdirectory *within* this root.
 *
 * Precedence:
 *   1. --root <path>            (CLI arg)
 *   2. MOTICON_PROJECT_ROOT     (env)
 *   3. process.cwd()            (safe default — the dir the MCP client launched us in)
 *
 * The value is realpath-resolved so later symlink checks compare against a
 * canonical path.
 */
import { realpathSync } from "node:fs";
import { resolve } from "node:path";

function rawRoot(argv: string[], env: NodeJS.ProcessEnv): string {
  const i = argv.indexOf("--root");
  if (i !== -1 && argv[i + 1]) return argv[i + 1];
  const eq = argv.find((a) => a.startsWith("--root="));
  if (eq) return eq.slice("--root=".length);
  if (env.MOTICON_PROJECT_ROOT) return env.MOTICON_PROJECT_ROOT;
  return process.cwd();
}

function canonical(path: string): string {
  const abs = resolve(path);
  try {
    return realpathSync.native ? realpathSync.native(abs) : realpathSync(abs);
  } catch {
    // root does not exist yet / not resolvable — fall back to the lexical form;
    // writer.ts still refuses to create anything outside it.
    return abs;
  }
}

export const WORKSPACE_ROOT = canonical(
  rawRoot(process.argv.slice(2), process.env),
);
