import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { getIcon } from "../src/catalog.ts";
import { writeIcon } from "../src/writer.ts";

function tmp() {
  return mkdtempSync(join(tmpdir(), "moticon-writer-"));
}
const opts = (root: string, over = false) => ({
  root,
  subdir: "",
  componentsDir: "components",
  libDir: "lib",
  overwrite: over,
});

test("self-contained icon: one file, no helper, aliased import", () => {
  const root = tmp();
  const res = writeIcon(getIcon("Bell")!, opts(root));
  assert.ok(!("error" in res));
  if ("error" in res) return;
  assert.equal(res.files.length, 1);
  assert.equal(res.files[0].status, "written");
  assert.equal(res.importPath, "@/components/moticon/Bell");
  const src = readFileSync(join(root, "components/moticon/Bell.tsx"), "utf-8");
  assert.ok(src.includes("interface MoticonIconProps"));
  assert.ok(!src.includes("../icons/types"));
  assert.ok(!existsSync(join(root, "lib/moticon-motion.tsx")));
});

test("helper-based icon: writes helper + rewrites import to a relative path", () => {
  const root = tmp();
  const res = writeIcon(getIcon("Accessibility")!, opts(root));
  assert.ok(!("error" in res));
  if ("error" in res) return;
  assert.equal(res.files.length, 2);
  assert.ok(existsSync(join(root, "lib/moticon-motion.tsx")));
  const src = readFileSync(join(root, "components/moticon/Accessibility.tsx"), "utf-8");
  assert.ok(!src.includes("./createEnhancedIcon"));
  assert.ok(/from "\.\.\/\.\.\/lib\/moticon-motion"/.test(src));
});

test("projectSubdir places files under the subdirectory", () => {
  const root = tmp();
  const res = writeIcon(getIcon("Bell")!, { ...opts(root), subdir: "apps/web" });
  assert.ok(!("error" in res));
  assert.ok(existsSync(join(root, "apps/web/components/moticon/Bell.tsx")));
});

test("duplicate write without overwrite -> file_exists conflict", () => {
  const root = tmp();
  writeIcon(getIcon("Bell")!, opts(root));
  writeFileSync(join(root, "components/moticon/Bell.tsx"), "// edited\n");
  const res = writeIcon(getIcon("Bell")!, opts(root));
  assert.ok("error" in res);
  if ("error" in res) assert.equal(res.error, "file_exists");
});

test("identical re-write is idempotent (status unchanged, no error)", () => {
  const root = tmp();
  writeIcon(getIcon("Bell")!, opts(root));
  const res = writeIcon(getIcon("Bell")!, opts(root));
  assert.ok(!("error" in res));
  if (!("error" in res)) assert.equal(res.files[0].status, "unchanged");
});

test("overwrite: true replaces an existing file", () => {
  const root = tmp();
  mkdirSync(join(root, "components/moticon"), { recursive: true });
  writeFileSync(join(root, "components/moticon/Bell.tsx"), "// stale\n");
  const res = writeIcon(getIcon("Bell")!, opts(root, true));
  assert.ok(!("error" in res));
  const src = readFileSync(join(root, "components/moticon/Bell.tsx"), "utf-8");
  assert.ok(src.includes("export function Bell"));
});

test("existing identical helper is left untouched, reported unchanged", () => {
  const root = tmp();
  writeIcon(getIcon("Accessibility")!, opts(root));
  const res = writeIcon(getIcon("Activity")!, opts(root));
  assert.ok(!("error" in res));
  if (!("error" in res)) {
    const helper = res.files.find((f) => f.path.includes("moticon-motion"));
    assert.equal(helper?.status, "unchanged");
  }
});

test("different existing helper without overwrite -> helper_conflict", () => {
  const root = tmp();
  mkdirSync(join(root, "lib"), { recursive: true });
  writeFileSync(join(root, "lib/moticon-motion.tsx"), "// my own helper\n");
  const res = writeIcon(getIcon("Accessibility")!, opts(root));
  assert.ok("error" in res);
  if ("error" in res) assert.equal(res.error, "helper_conflict");
});

test("custom componentsDir / libDir are honored", () => {
  const root = tmp();
  const res = writeIcon(getIcon("Accessibility")!, {
    ...opts(root),
    componentsDir: "src/ui",
    libDir: "src/shared",
  });
  assert.ok(!("error" in res));
  assert.ok(existsSync(join(root, "src/ui/moticon/Accessibility.tsx")));
  assert.ok(existsSync(join(root, "src/shared/moticon-motion.tsx")));
});

test("a lexical escape via componentsDir is refused", () => {
  const root = tmp();
  const res = writeIcon(getIcon("Bell")!, { ...opts(root), componentsDir: "../../etc" });
  assert.ok("error" in res);
  if ("error" in res) assert.equal(res.error, "escapes_root");
});
