/**
 * The write half of `add_icon`: turn a catalog entry into files on disk inside
 * the trusted workspace root, matching what `npx shadcn add` would produce.
 *
 * - the icon component goes to `<subdir>/<componentsDir>/moticon/<Name>.tsx`
 * - if the icon needs the shared helper, it goes to
 *   `<subdir>/<libDir>/moticon-motion.tsx` and the component import is
 *   rewritten to a relative path pointing at it
 * - existing files are never overwritten unless `overwrite` is true; an
 *   identical helper is left in place and reported as "unchanged"
 *
 * Every path is resolved through safe-path.resolveInsideRoot against the
 * startup-fixed root — a caller cannot escape it lexically or via a symlink.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep, posix } from "node:path";
import { HELPER, type IconEntry } from "./catalog.js";
import { resolveInsideRoot, type SafePathError } from "./safe-path.js";
import { rewriteHelperImport } from "./name.js";

export type WriteStatus = "written" | "unchanged" | "conflict";

export interface WrittenFile {
  path: string;
  status: WriteStatus;
}

export interface WriteError {
  error: SafePathError | "file_exists" | "helper_conflict" | "write_failed";
  message: string;
  path?: string;
}

export interface WriteOk {
  files: WrittenFile[];
  importPath: string;
}

/** Relative import specifier from `fromFile` to `toFile`, POSIX, with `./`. */
function importSpecifier(fromFile: string, toFile: string): string {
  let rel = relative(dirname(fromFile), toFile).split(sep).join(posix.sep);
  rel = rel.replace(/\.tsx$/, "");
  if (!rel.startsWith(".")) rel = "./" + rel;
  return rel;
}

/** `components/moticon/Bell.tsx` -> `@/components/moticon/Bell` (shadcn convention). */
function aliasImport(rel: string): string {
  return "@/" + rel.replace(/\.tsx$/, "").split(sep).join(posix.sep);
}

export function writeIcon(
  icon: IconEntry,
  opts: {
    root: string;
    subdir: string;
    componentsDir: string;
    libDir: string;
    overwrite: boolean;
  },
): WriteOk | WriteError {
  const componentRel = join(opts.componentsDir, "moticon", `${icon.name}.tsx`);
  const componentSafe = resolveInsideRoot(opts.root, opts.subdir, componentRel);
  if (!componentSafe.ok || !componentSafe.path) {
    return {
      error: componentSafe.error ?? "invalid_path",
      message: componentSafe.message ?? "invalid component path",
      path: displayPath(opts.subdir, componentRel),
    };
  }
  const componentPath = componentSafe.path;

  const files: WrittenFile[] = [];
  let source = icon.source;

  // --- helper, if needed --------------------------------------------------
  if (icon.needsHelper) {
    const helperRel = join(opts.libDir, "moticon-motion.tsx");
    const helperSafe = resolveInsideRoot(opts.root, opts.subdir, helperRel);
    if (!helperSafe.ok || !helperSafe.path) {
      return {
        error: helperSafe.error ?? "invalid_path",
        message: helperSafe.message ?? "invalid lib path",
        path: displayPath(opts.subdir, helperRel),
      };
    }
    const helperPath = helperSafe.path;
    const helperDisplay = displayPath(opts.subdir, helperRel);

    if (existsSync(helperPath)) {
      const current = safeRead(helperPath);
      if (current === HELPER.source) {
        files.push({ path: helperDisplay, status: "unchanged" });
      } else if (opts.overwrite) {
        if (!tryWrite(helperPath, HELPER.source)) {
          return { error: "write_failed", message: "could not write helper", path: helperDisplay };
        }
        files.push({ path: helperDisplay, status: "written" });
      } else {
        return {
          error: "helper_conflict",
          message:
            "a different moticon-motion.tsx already exists; pass overwrite: true to replace it",
          path: helperDisplay,
        };
      }
    } else {
      if (!tryWrite(helperPath, HELPER.source)) {
        return { error: "write_failed", message: "could not write helper", path: helperDisplay };
      }
      files.push({ path: helperDisplay, status: "written" });
    }

    source = rewriteHelperImport(source, importSpecifier(componentPath, helperPath));
  }

  // --- component --------------------------------------------------------
  const componentDisplay = displayPath(opts.subdir, componentRel);
  if (existsSync(componentPath)) {
    const current = safeRead(componentPath);
    if (current === source) {
      files.push({ path: componentDisplay, status: "unchanged" });
      return { files, importPath: aliasImport(componentRel) };
    }
    if (!opts.overwrite) {
      files.push({ path: componentDisplay, status: "conflict" });
      return {
        error: "file_exists",
        message: `${componentDisplay} already exists; pass overwrite: true to replace it`,
        path: componentDisplay,
      };
    }
  }

  if (!tryWrite(componentPath, source)) {
    return { error: "write_failed", message: "could not write component", path: componentDisplay };
  }
  files.push({ path: componentDisplay, status: "written" });

  return { files, importPath: aliasImport(componentRel) };
}

function displayPath(subdir: string, rel: string): string {
  return (subdir ? join(subdir, rel) : rel).split(sep).join(posix.sep);
}

function safeRead(path: string): string | null {
  try {
    return readFileSync(path, "utf-8");
  } catch {
    return null;
  }
}

function tryWrite(path: string, content: string): boolean {
  try {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content, "utf-8");
    return true;
  } catch {
    return false;
  }
}
