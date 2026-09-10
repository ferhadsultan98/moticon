/**
 * Path safety for the one write tool, `add_icon`.
 *
 * The trusted root is fixed at process startup (root.ts). A tool call may only
 * pick a subdirectory and filename inside it. This module turns
 * (root, subdir, relativeFile) into an allowed absolute path, or an error.
 *
 * Two layers:
 *   1. lexical — reject null bytes, absolute components, `..` escape, Windows
 *      drive / UNC prefixes, non-.tsx names.
 *   2. filesystem — walk the deepest existing ancestor of the target and
 *      realpath it; if that canonical path is not inside the canonical root,
 *      a symlink (or junction) is escaping the root. Refuse.
 *
 * Cross-platform: node:path, case-insensitive compare on win32.
 */
import { existsSync, realpathSync } from "node:fs";
import { isAbsolute, resolve, relative, sep, dirname } from "node:path";

export type SafePathError =
  | "null_byte"
  | "absolute_destination"
  | "drive_or_unc"
  | "escapes_root"
  | "symlink_escape"
  | "not_tsx"
  | "invalid_path";

export interface SafePathResult {
  ok: boolean;
  path?: string;
  error?: SafePathError;
  message?: string;
}

const WIN_DRIVE_OR_UNC = /^(?:[A-Za-z]:|[\\/]{2})/;

const realpath = (p: string) =>
  realpathSync.native ? realpathSync.native(p) : realpathSync(p);

const norm = (s: string) => (process.platform === "win32" ? s.toLowerCase() : s);

/** Is `child` the same as, or nested under, `parent`? Both must be absolute. */
function isInside(parent: string, child: string): boolean {
  const rel = relative(norm(parent), norm(child));
  return rel === "" || (!rel.startsWith("..") && !isAbsolute(rel));
}

/**
 * Resolve a write target inside the trusted root.
 *
 * @param root       the trusted workspace root (already canonical)
 * @param subdir     caller-chosen subdirectory, relative to root (may be "")
 * @param relFile    the relative file path under subdir (e.g. "moticon/Bell.tsx")
 */
export function resolveInsideRoot(
  root: string,
  subdir: string,
  relFile: string,
  { requireTsx = true }: { requireTsx?: boolean } = {},
): SafePathResult {
  for (const part of [root, subdir, relFile]) {
    if (part.includes("\0")) {
      return { ok: false, error: "null_byte", message: "path contains a null byte" };
    }
  }

  for (const [label, value] of [
    ["projectSubdir", subdir],
    ["destination", relFile],
  ] as const) {
    const v = value.trim();
    if (!v) continue;
    const asSep = v.replace(/[\\/]+/g, sep);
    if (isAbsolute(asSep) || WIN_DRIVE_OR_UNC.test(v)) {
      return {
        ok: false,
        error: isAbsolute(asSep) ? "absolute_destination" : "drive_or_unc",
        message: `${label} must be a path relative to the workspace root`,
      };
    }
  }

  if (requireTsx && !/\.tsx$/.test(relFile.trim())) {
    return { ok: false, error: "not_tsx", message: "destination must end in .tsx" };
  }

  const rootAbs = resolve(root);
  const target = resolve(rootAbs, subdir, relFile);

  // lexical containment
  if (!isInside(rootAbs, target)) {
    return {
      ok: false,
      error: "escapes_root",
      message: "resolved destination is outside the workspace root",
    };
  }

  // filesystem containment: canonicalize the deepest existing ancestor
  let ancestor = target;
  while (!existsSync(ancestor)) {
    const parent = dirname(ancestor);
    if (parent === ancestor) break;
    ancestor = parent;
  }

  let canonicalAncestor: string;
  try {
    canonicalAncestor = realpath(ancestor);
  } catch {
    canonicalAncestor = ancestor;
  }

  let canonicalRoot: string;
  try {
    canonicalRoot = realpath(rootAbs);
  } catch {
    canonicalRoot = rootAbs;
  }

  if (!isInside(canonicalRoot, canonicalAncestor)) {
    return {
      ok: false,
      error: "symlink_escape",
      message:
        "a symlink or junction in the path leads outside the workspace root",
    };
  }

  // rebuild the final path onto the canonical ancestor so the returned path is
  // symlink-free for the part that already exists
  const tail = relative(ancestor, target);
  const finalPath = tail ? resolve(canonicalAncestor, tail) : canonicalAncestor;

  if (!isInside(canonicalRoot, finalPath)) {
    return {
      ok: false,
      error: "symlink_escape",
      message: "resolved destination escapes the workspace root via a link",
    };
  }

  return { ok: true, path: finalPath };
}
