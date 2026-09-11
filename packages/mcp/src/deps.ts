/**
 * Deterministic `motion` dependency check for the effective project directory.
 *
 * moticon icons render with `motion` (peer range `>=11 <14` — matches
 * @moticon/react, verified in step 4). add_icon writes source but never runs a
 * package manager. It reports what it found so the agent knows the next step.
 *
 * The effective project directory is `<workspace root>/<projectSubdir>`. Its
 * own package.json wins; only when it has none do we fall back to the
 * workspace root's package.json. `dependencyManifest` in the report says which
 * one was used, as a path relative to the workspace root.
 *
 * Reads package.json only. No install, no network. Never returns an absolute
 * internal path.
 */
import { existsSync, readFileSync } from "node:fs";
import { join, relative, sep, posix } from "node:path";

export const MOTION_RANGE = ">=11 <14";
export const MOTION_DEP = `motion@${MOTION_RANGE}`;
export const SUGGESTED_COMMAND = `npm install "motion@>=11 <14"`;

export type DependencyStatus = "compatible" | "missing" | "incompatible" | "unknown";

export interface DependencyReport {
  requiredDependencies: string[];
  dependencyStatus: DependencyStatus;
  installedMotion: string | null;
  missingDependencies: string[];
  suggestedCommand: string | null;
  /** package.json used, relative to the workspace root ("package.json", "apps/web/package.json"), or null when none was found. */
  dependencyManifest: string | null;
  note: string;
}

interface PkgJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

/** First integer in a semver-ish range/spec: "^13.2.0" -> 13, ">=11 <14" -> 11. */
function majorOf(spec: string): number | null {
  const m = spec.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

function readPkg(dir: string): PkgJson | null {
  const p = join(dir, "package.json");
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, "utf-8")) as PkgJson;
  } catch {
    return null;
  }
}

function relManifest(root: string, dir: string): string {
  const rel = relative(root, join(dir, "package.json"));
  return (rel || "package.json").split(sep).join(posix.sep);
}

/**
 * @param workspaceRoot the trusted workspace root (already canonical)
 * @param subdir        validated projectSubdir, relative to root (may be "")
 */
export function checkMotion(workspaceRoot: string, subdir = ""): DependencyReport {
  const base: Omit<DependencyReport, "dependencyStatus" | "note"> = {
    requiredDependencies: [MOTION_DEP],
    installedMotion: null,
    missingDependencies: [],
    suggestedCommand: null,
    dependencyManifest: null,
  };

  const effectiveDir = subdir ? join(workspaceRoot, subdir) : workspaceRoot;

  // 1. effective project dir; 2. workspace root fallback (only if distinct and
  //    the effective dir had no package.json).
  let pkg = readPkg(effectiveDir);
  let manifestDir = effectiveDir;
  if (!pkg && effectiveDir !== workspaceRoot) {
    pkg = readPkg(workspaceRoot);
    manifestDir = workspaceRoot;
  }

  if (!pkg) {
    return {
      ...base,
      dependencyStatus: "unknown",
      note: `no package.json at ${relManifest(workspaceRoot, effectiveDir)}${
        effectiveDir !== workspaceRoot ? " or the workspace root" : ""
      } — cannot check for motion. Icons need motion@>=11 <14.`,
    };
  }

  const manifest = relManifest(workspaceRoot, manifestDir);
  const spec =
    pkg.dependencies?.motion ??
    pkg.devDependencies?.motion ??
    pkg.peerDependencies?.motion ??
    null;

  if (!spec) {
    return {
      ...base,
      dependencyStatus: "missing",
      missingDependencies: [MOTION_DEP],
      suggestedCommand: SUGGESTED_COMMAND,
      dependencyManifest: manifest,
      note: `motion is not in ${manifest}. Install it before building — icons will not compile without it.`,
    };
  }

  const major = majorOf(spec);
  if (major === null) {
    return {
      ...base,
      installedMotion: spec,
      dependencyStatus: "unknown",
      dependencyManifest: manifest,
      note: `motion is present in ${manifest} ("${spec}") but its version could not be parsed. Ensure it resolves within ${MOTION_RANGE}.`,
    };
  }
  if (major >= 11 && major <= 13) {
    return {
      ...base,
      installedMotion: spec,
      dependencyStatus: "compatible",
      dependencyManifest: manifest,
      note: `motion "${spec}" (${manifest}) satisfies ${MOTION_RANGE}.`,
    };
  }
  return {
    ...base,
    installedMotion: spec,
    dependencyStatus: "incompatible",
    missingDependencies: [MOTION_DEP],
    suggestedCommand: SUGGESTED_COMMAND,
    dependencyManifest: manifest,
    note: `motion "${spec}" (${manifest}) is outside the supported range ${MOTION_RANGE} (major ${major}). moticon icons are only verified against motion 11–13; motion 14+ is untested and may break the animation API.`,
  };
}
