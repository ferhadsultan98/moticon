import { test } from "node:test";
import assert from "node:assert/strict";
import { searchIcons } from "../src/search.ts";
import { iconNames } from "../src/catalog.ts";
import { SYNONYMS } from "../src/synonyms.ts";

test("exact name ranks first", () => {
  const [top] = searchIcons("bell");
  assert.equal(top.name, "Bell");
});

test("kebab / camel / spaced forms all resolve the same", () => {
  const a = searchIcons("bell-ring")[0]?.name;
  const b = searchIcons("BellRing")[0]?.name;
  const c = searchIcons("bell ring")[0]?.name;
  assert.equal(a, "BellRing");
  assert.equal(b, "BellRing");
  assert.equal(c, "BellRing");
});

test("intent synonym: notification -> Bell / BellRing near the top", () => {
  const names = searchIcons("notification", {}, 5).map((r) => r.name);
  assert.ok(names.includes("Bell"), names.join(","));
  assert.ok(names.slice(0, 3).some((n) => n === "Bell" || n === "BellRing"));
});

test("intent synonym: cut -> Scissors first", () => {
  assert.equal(searchIcons("cut")[0].name, "Scissors");
});

test("intent synonym: download -> Download first", () => {
  assert.equal(searchIcons("download")[0].name, "Download");
});

test("multi-word query: menu close finds Menu (stateful)", () => {
  const hits = searchIcons("menu close", {}, 5);
  const menu = hits.find((h) => h.name === "Menu");
  assert.ok(menu, hits.map((h) => h.name).join(","));
  assert.equal(menu.stateful, true);
});

test("volume finds a Volume icon", () => {
  const names = searchIcons("volume", {}, 5).map((r) => r.name);
  assert.ok(names.some((n) => n.startsWith("Volume")));
});

test("nonsense query returns nothing", () => {
  assert.equal(searchIcons("qwzxplkj").length, 0);
});

test("limit is respected and hard-capped feel", () => {
  assert.equal(searchIcons("a", {}, 3).length <= 3, true);
});

test("filters narrow the pool", () => {
  const hits = searchIcons("bell", { trigger: "hover" }, 10);
  assert.ok(hits.every((h) => h.trigger === "hover"));
});

test("every synonym target exists in the catalog", () => {
  const set = new Set(iconNames);
  const missing: string[] = [];
  for (const [phrase, targets] of Object.entries(SYNONYMS)) {
    for (const t of targets) if (!set.has(t)) missing.push(`${phrase} -> ${t}`);
  }
  assert.deepEqual(missing, []);
});
