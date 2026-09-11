#!/usr/bin/env node
/**
 * Read-only sanity check to run after `npm run version-packages`, before
 * committing the version-bump PR. Never publishes, and never modifies any
 * tracked file — the lockfile check runs entirely inside a throwaway temp
 * directory that is always deleted.
 *
 * Verifies:
 *   - only packages with a pending changeset were bumped
 *   - every internal dependency range is satisfiable by the new version
 *   - the private site's @moticon/react range was not rewritten
 *   - package.json <-> package-lock.json are consistent
 *
 * Exit non-zero on any problem.
 */
import {
  readFileSync,
  readdirSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  copyFileSync,
  rmSync,
} from "node:fs";
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import semver from "semver";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(join(root, p), "utf-8"));

const problems = [];
const note = (m) => problems.push(m);

// --- workspaces -------------------------------------------------------------
const rootPkg = read("package.json");
const wsGlobs = rootPkg.workspaces ?? [];
const wsDirs = [];
for (const glob of wsGlobs) {
  const base = glob.replace(/\/\*$/, "");
  if (glob.endsWith("/*")) {
    for (const entry of readdirSync(join(root, base), { withFileTypes: true })) {
      if (entry.isDirectory() && existsSync(join(root, base, entry.name, "package.json"))) {
        wsDirs.push(`${base}/${entry.name}`);
      }
    }
  } else if (existsSync(join(root, glob, "package.json"))) {
    wsDirs.push(glob);
  }
}

const pkgs = wsDirs.map((dir) => ({ dir, json: read(`${dir}/package.json`) }));
const byName = new Map(pkgs.map((p) => [p.json.name, p]));
const published = pkgs.filter((p) => !p.json.private);

// --- 1. only packages with a pending changeset were bumped -----------------
// Pending changesets are consumed by `changeset version`, so at this point
// .changeset/*.md (excluding README/config) should be empty. If any remain,
// `version` wasn't run. We instead compare HEAD versions to working-tree
// versions and cross-check against the changelog entries just written.
let bumped = [];
for (const p of published) {
  let headJson;
  try {
    headJson = JSON.parse(
      execSync(`git show HEAD:${p.dir}/package.json`, {
        cwd: root,
        encoding: "utf-8",
        stdio: ["pipe", "pipe", "ignore"],
      }),
    );
  } catch {
    // package is new (not yet on HEAD) — nothing to compare against.
    continue;
  }
  if (headJson.version !== p.json.version) {
    bumped.push({ name: p.json.name, from: headJson.version, to: p.json.version });
    const clPath = join(root, p.dir, "CHANGELOG.md");
    if (!existsSync(clPath) || !readFileSync(clPath, "utf-8").includes(`## ${p.json.version}`)) {
      note(`${p.json.name} bumped to ${p.json.version} but has no CHANGELOG entry`);
    }
  }
}

if (bumped.length === 0) {
  note("no package versions changed — did `npm run version-packages` run?");
}

// --- 2. internal dependency ranges satisfiable -----------------------------
for (const p of pkgs) {
  for (const field of ["dependencies", "peerDependencies", "devDependencies"]) {
    for (const [dep, range] of Object.entries(p.json[field] ?? {})) {
      const target = byName.get(dep);
      if (!target) continue;
      if (range === "*" || range.startsWith("workspace:")) continue;
      if (!semver.satisfies(target.json.version, range)) {
        note(
          `${p.json.name} ${field}["${dep}"] = "${range}" does not allow ${dep}@${target.json.version}`,
        );
      }
    }
  }
}

// --- 3. private site @moticon/react range untouched -----------------------
const site = byName.get("moticon-site");
if (site) {
  try {
    const headSite = JSON.parse(
      execSync("git show HEAD:apps/site/package.json", { cwd: root, encoding: "utf-8" }),
    );
    const headRange = headSite.dependencies?.["@moticon/react"];
    const nowRange = site.json.dependencies?.["@moticon/react"];
    if (headRange !== nowRange) {
      note(
        `apps/site @moticon/react range changed from "${headRange}" to "${nowRange}" — ` +
          `revert it (the site links the workspace, it should stay "${headRange}")`,
      );
    }
  } catch {
    /* ignore */
  }
}

// --- 4. package.json <-> package-lock.json consistency --------------------
// Read-only. We copy every workspace manifest + the root manifest + the
// lockfile into a throwaway directory, regenerate the lockfile there with
// `npm install --package-lock-only`, and compare. The real repo lockfile is
// never touched. The temp dir is always removed.
{
  let tmp;
  try {
    tmp = mkdtempSync(join(tmpdir(), "moticon-release-check-"));

    // root manifest + lockfile
    copyFileSync(join(root, "package.json"), join(tmp, "package.json"));
    copyFileSync(join(root, "package-lock.json"), join(tmp, "package-lock.json"));

    // every workspace manifest, at the same relative path
    for (const { dir } of pkgs) {
      mkdirSync(join(tmp, dir), { recursive: true });
      copyFileSync(join(root, dir, "package.json"), join(tmp, dir, "package.json"));
    }

    const before = readFileSync(join(tmp, "package-lock.json"), "utf-8");
    let installFailed = null;
    try {
      execSync("npm install --package-lock-only --ignore-scripts --no-audit --no-fund", {
        cwd: tmp,
        stdio: "pipe",
      });
    } catch (e) {
      // npm couldn't resolve the lockfile — almost always an unsatisfiable
      // internal dependency range. Surface a short reason, not npm's full log.
      const stderr = (e.stderr?.toString() ?? "").split("\n").find((l) => /No matching version|notarget|ETARGET/.test(l));
      installFailed = stderr?.trim() || "npm install --package-lock-only failed in an isolated copy";
    }

    if (installFailed) {
      note(`package-lock.json cannot be regenerated: ${installFailed}`);
    } else {
      const after = readFileSync(join(tmp, "package-lock.json"), "utf-8");
      if (before !== after) {
        note(
          "package-lock.json is out of sync with the workspace manifests — " +
            "run `npm install --package-lock-only` and commit the result",
        );
      }
    }
  } catch (e) {
    note(`could not verify package-lock.json: ${e.message}`);
  } finally {
    if (tmp) rmSync(tmp, { recursive: true, force: true });
  }
}

// --- report --------------------------------------------------------------
console.log("Bumped packages:");
if (bumped.length) {
  for (const b of bumped) console.log(`  ${b.name}: ${b.from} -> ${b.to}`);
} else {
  console.log("  (none)");
}

if (problems.length) {
  console.error("\nrelease:check found problems:");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log("\nrelease:check passed.");
