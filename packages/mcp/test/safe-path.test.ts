import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { resolveInsideRoot } from "../src/safe-path.ts";

function root() {
  return mkdtempSync(join(tmpdir(), "moticon-safepath-"));
}

test("plain relative path inside root is allowed", () => {
  const r = resolveInsideRoot(root(), "", "components/moticon/Bell.tsx");
  assert.equal(r.ok, true);
  assert.ok(r.path);
});

test("subdir + file inside root is allowed", () => {
  const r = resolveInsideRoot(root(), "apps/web", "components/moticon/Bell.tsx");
  assert.equal(r.ok, true);
});

test("../ escape in destination is rejected", () => {
  const r = resolveInsideRoot(root(), "", "../evil/Bell.tsx");
  assert.equal(r.ok, false);
  assert.equal(r.error, "escapes_root");
});

test("../ escape in projectSubdir is rejected", () => {
  const r = resolveInsideRoot(root(), "../up", "Bell.tsx");
  assert.equal(r.ok, false);
  assert.equal(r.error, "escapes_root");
});

test("deep ../ escape is rejected", () => {
  const r = resolveInsideRoot(root(), "", "a/b/../../../../etc/Bell.tsx");
  assert.equal(r.ok, false);
  assert.equal(r.error, "escapes_root");
});

test("absolute posix destination is rejected", () => {
  const r = resolveInsideRoot(root(), "", "/etc/passwd.tsx");
  assert.equal(r.ok, false);
  assert.equal(r.error, "absolute_destination");
});

test("windows drive destination is rejected", () => {
  const r = resolveInsideRoot(root(), "", "C:\\Windows\\system32\\x.tsx");
  assert.equal(r.ok, false);
  assert.ok(r.error === "drive_or_unc" || r.error === "absolute_destination");
});

test("UNC destination is rejected", () => {
  const r = resolveInsideRoot(root(), "", "\\\\server\\share\\x.tsx");
  assert.equal(r.ok, false);
  assert.ok(r.error === "drive_or_unc" || r.error === "absolute_destination");
});

test("null byte is rejected", () => {
  const r = resolveInsideRoot(root(), "", "components/Bell\0.tsx");
  assert.equal(r.ok, false);
  assert.equal(r.error, "null_byte");
});

test("non-.tsx destination is rejected", () => {
  const r = resolveInsideRoot(root(), "", "components/Bell.ts");
  assert.equal(r.ok, false);
  assert.equal(r.error, "not_tsx");
});

test("backslash separators inside root are normalized and allowed", () => {
  const r = resolveInsideRoot(root(), "", "components\\moticon\\Bell.tsx");
  assert.equal(r.ok, true);
});

// --- symlink / junction escapes ------------------------------------------

/** Try a real dir symlink; on Windows fall back to a junction (no privilege needed). */
function linkDir(target: string, path: string): boolean {
  for (const type of ["dir", "junction"] as const) {
    try {
      symlinkSync(target, path, type);
      return true;
    } catch {
      /* try next */
    }
  }
  return false;
}

test("junction/symlink directory escaping the root is refused", (t) => {
  const r = root();
  const outside = mkdtempSync(join(tmpdir(), "moticon-outside-j-"));
  if (!linkDir(outside, join(r, "components"))) {
    return t.skip("neither symlink nor junction permitted on this host");
  }
  const res = resolveInsideRoot(r, "", "components/moticon/Bell.tsx");
  assert.equal(res.ok, false);
  assert.equal(res.error, "symlink_escape");
});

test("nested junction/symlink escaping the root is refused", (t) => {
  const r = root();
  const outside = mkdtempSync(join(tmpdir(), "moticon-outside-j2-"));
  mkdirSync(join(r, "src"));
  if (!linkDir(outside, join(r, "src", "lib"))) {
    return t.skip("neither symlink nor junction permitted on this host");
  }
  const res = resolveInsideRoot(r, "src", "lib/moticon-motion.tsx");
  assert.equal(res.ok, false);
  assert.equal(res.error, "symlink_escape");
});

test("a junction/symlink that stays inside the root is still allowed", (t) => {
  const r = root();
  mkdirSync(join(r, "real"));
  if (!linkDir(join(r, "real"), join(r, "components"))) {
    return t.skip("neither symlink nor junction permitted on this host");
  }
  const res = resolveInsideRoot(r, "", "components/moticon/Bell.tsx");
  assert.equal(res.ok, true);
});

// --- symlink escapes (POSIX; skipped on Windows without privilege) --------

test("symlinked directory pointing outside root is refused", (t) => {
  const r = root();
  const outside = mkdtempSync(join(tmpdir(), "moticon-outside-"));
  try {
    symlinkSync(outside, join(r, "components"), "dir");
  } catch {
    return t.skip("symlink not permitted on this host");
  }
  const res = resolveInsideRoot(r, "", "components/moticon/Bell.tsx");
  assert.equal(res.ok, false);
  assert.equal(res.error, "symlink_escape");
});

test("nested symlinked directory escaping the root is refused", (t) => {
  const r = root();
  const outside = mkdtempSync(join(tmpdir(), "moticon-outside2-"));
  mkdirSync(join(r, "src"));
  try {
    symlinkSync(outside, join(r, "src", "lib"), "dir");
  } catch {
    return t.skip("symlink not permitted on this host");
  }
  const res = resolveInsideRoot(r, "src", "lib/moticon-motion.tsx");
  assert.equal(res.ok, false);
  assert.equal(res.error, "symlink_escape");
});

test("a symlink that stays inside the root is still allowed", (t) => {
  const r = root();
  mkdirSync(join(r, "real"));
  try {
    symlinkSync(join(r, "real"), join(r, "components"), "dir");
  } catch {
    return t.skip("symlink not permitted on this host");
  }
  const res = resolveInsideRoot(r, "", "components/moticon/Bell.tsx");
  assert.equal(res.ok, true);
});
