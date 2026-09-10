import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { checkMotion } from "../src/deps.ts";

function root() {
  return mkdtempSync(join(tmpdir(), "moticon-deps-"));
}
function writePkg(dir: string, pkg: object) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "package.json"), JSON.stringify(pkg));
}

// --- single directory (subdir = "") -------------------------------------

test("no package.json -> unknown, with a note", () => {
  const r = checkMotion(root());
  assert.equal(r.dependencyStatus, "unknown");
  assert.equal(r.dependencyManifest, null);
});

test("motion absent -> missing + suggested command + manifest", () => {
  const r = root();
  writePkg(r, { name: "x", dependencies: { react: "^19" } });
  const rep = checkMotion(r);
  assert.equal(rep.dependencyStatus, "missing");
  assert.deepEqual(rep.missingDependencies, ["motion@>=11 <14"]);
  assert.ok(rep.suggestedCommand?.includes("motion"));
  assert.equal(rep.dependencyManifest, "package.json");
});

test("motion 12 -> compatible", () => {
  const r = root();
  writePkg(r, { dependencies: { motion: "^12.4.0" } });
  assert.equal(checkMotion(r).dependencyStatus, "compatible");
});

test("motion 11 (devDependency) -> compatible", () => {
  const r = root();
  writePkg(r, { devDependencies: { motion: "~11.18.2" } });
  assert.equal(checkMotion(r).dependencyStatus, "compatible");
});

test("motion 14 -> incompatible + suggested command", () => {
  const r = root();
  writePkg(r, { dependencies: { motion: "^14.0.0" } });
  const rep = checkMotion(r);
  assert.equal(rep.dependencyStatus, "incompatible");
  assert.ok(rep.note.includes("untested") || rep.note.includes("outside"));
  assert.ok(rep.suggestedCommand?.includes("motion"));
});

// --- monorepo: effective project dir = root + projectSubdir --------------

test("A: subdir package.json has motion, root does not -> compatible from subdir", () => {
  const r = root();
  writePkg(r, { name: "monorepo", private: true });
  writePkg(join(r, "apps/web"), { name: "web", dependencies: { motion: "^13.0.0" } });
  const rep = checkMotion(r, "apps/web");
  assert.equal(rep.dependencyStatus, "compatible");
  assert.equal(rep.dependencyManifest, "apps/web/package.json");
});

test("B: subdir motion 14 overrides root motion 13 -> incompatible", () => {
  const r = root();
  writePkg(r, { name: "monorepo", dependencies: { motion: "^13.0.0" } });
  writePkg(join(r, "apps/web"), { name: "web", dependencies: { motion: "^14.0.0" } });
  const rep = checkMotion(r, "apps/web");
  assert.equal(rep.dependencyStatus, "incompatible");
  assert.equal(rep.dependencyManifest, "apps/web/package.json");
});

test("C: subdir has no package.json -> falls back to root", () => {
  const r = root();
  writePkg(r, { name: "monorepo", dependencies: { motion: "^12.0.0" } });
  mkdirSync(join(r, "apps/web"), { recursive: true }); // dir exists, no package.json
  const rep = checkMotion(r, "apps/web");
  assert.equal(rep.dependencyStatus, "compatible");
  assert.equal(rep.dependencyManifest, "package.json");
});

test("D: no package.json anywhere -> unknown", () => {
  const r = root();
  mkdirSync(join(r, "apps/web"), { recursive: true });
  const rep = checkMotion(r, "apps/web");
  assert.equal(rep.dependencyStatus, "unknown");
  assert.equal(rep.dependencyManifest, null);
});

test("dependencyManifest is always workspace-root-relative, never absolute", () => {
  const r = root();
  writePkg(join(r, "apps/web"), { dependencies: { motion: "^13.0.0" } });
  const rep = checkMotion(r, "apps/web");
  assert.equal(rep.dependencyManifest, "apps/web/package.json");
  assert.ok(!rep.dependencyManifest!.includes(":"));
  assert.ok(!rep.dependencyManifest!.startsWith("/"));
});
