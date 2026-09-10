import { test } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join as pjoin } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const entry = join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "index.js");

/** Spawn the built server, run a scripted JSON-RPC exchange, collect responses. */
function rpc(messages: object[], root?: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const args = root ? [entry, "--root", root] : [entry];
    const child = spawn(process.execPath, args, { stdio: ["pipe", "pipe", "pipe"] });
    let out = "";
    let err = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", reject);
    child.on("close", () => {
      const lines = out.split("\n").filter(Boolean).map((l) => JSON.parse(l));
      if (err.trim()) (lines as any).stderr = err;
      resolve(lines);
    });
    for (const m of messages) child.stdin.write(JSON.stringify(m) + "\n");
    child.stdin.end();
  });
}

const init = {
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2026-07-28",
    capabilities: {},
    clientInfo: { name: "test", version: "0" },
  },
};
const inited = { jsonrpc: "2.0", method: "notifications/initialized" };

test("initialize returns server info with the package version", async () => {
  const [res] = await rpc([init]);
  assert.equal(res.result.serverInfo.name, "moticon");
  assert.match(res.result.serverInfo.version, /^\d+\.\d+\.\d+$/);
});

test("tools/list returns exactly the four tools", async () => {
  const out = await rpc([init, inited, { jsonrpc: "2.0", id: 2, method: "tools/list" }]);
  const list = out.find((m) => m.id === 2).result.tools.map((t: any) => t.name).sort();
  assert.deepEqual(list, ["add_icon", "get_icon", "list_icons", "search_icons"]);
});

test("read-only tools carry readOnlyHint; add_icon does not", async () => {
  const out = await rpc([init, inited, { jsonrpc: "2.0", id: 2, method: "tools/list" }]);
  const tools = out.find((m) => m.id === 2).result.tools;
  const byName = Object.fromEntries(tools.map((t: any) => [t.name, t]));
  assert.equal(byName.search_icons.annotations.readOnlyHint, true);
  assert.equal(byName.get_icon.annotations.readOnlyHint, true);
  assert.equal(byName.list_icons.annotations.readOnlyHint, true);
  assert.equal(byName.add_icon.annotations.readOnlyHint, false);
});

test("search_icons returns structuredContent", async () => {
  const out = await rpc([
    init,
    inited,
    { jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "search_icons", arguments: { query: "cut" } } },
  ]);
  const r = out.find((m) => m.id === 2).result;
  assert.ok(r.structuredContent);
  assert.equal(r.structuredContent.results[0].name, "Scissors");
});

test("get_icon on unknown name -> structured icon_not_found with suggestions", async () => {
  const out = await rpc([
    init,
    inited,
    { jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "get_icon", arguments: { name: "notarealicon" } } },
  ]);
  const r = out.find((m) => m.id === 2).result;
  assert.equal(r.isError, true);
  assert.equal(r.structuredContent.error, "icon_not_found");
  assert.equal(r.structuredContent.suggestions.length, 3);
});

test("get_icon omits source unless asked", async () => {
  const without = await rpc([
    init,
    inited,
    { jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "get_icon", arguments: { name: "Bell" } } },
  ]);
  assert.equal(without.find((m) => m.id === 2).result.structuredContent.source, undefined);

  const withSrc = await rpc([
    init,
    inited,
    {
      jsonrpc: "2.0",
      id: 2,
      method: "tools/call",
      params: { name: "get_icon", arguments: { name: "Bell", includeSource: true } },
    },
  ]);
  assert.match(withSrc.find((m) => m.id === 2).result.structuredContent.source, /export function Bell/);
});

test("add_icon rejects a subdir that escapes the workspace root", async () => {
  const root = mkdtempSync(join(tmpdir(), "moticon-srv-"));
  const out = await rpc(
    [
      init,
      inited,
      {
        jsonrpc: "2.0",
        id: 2,
        method: "tools/call",
        params: { name: "add_icon", arguments: { name: "Bell", projectSubdir: "../../etc" } },
      },
    ],
    root,
  );
  const r = out.find((m) => m.id === 2).result;
  assert.equal(r.isError, true);
  assert.equal(r.structuredContent.error, "escapes_root");
});

test("add_icon writes inside the --root workspace and reports motion status", async () => {
  const root = mkdtempSync(join(tmpdir(), "moticon-srv-ok-"));
  writeFileSync(pjoin(root, "package.json"), JSON.stringify({ name: "consumer", dependencies: {} }));
  const out = await rpc(
    [
      init,
      inited,
      {
        jsonrpc: "2.0",
        id: 2,
        method: "tools/call",
        params: { name: "add_icon", arguments: { name: "Bell" } },
      },
    ],
    root,
  );
  const r = out.find((m) => m.id === 2).result;
  assert.equal(r.isError, undefined);
  assert.equal(r.structuredContent.icon, "Bell");
  assert.equal(r.structuredContent.workspaceRoot, root);
  assert.equal(r.structuredContent.dependencyStatus, "missing");
  assert.deepEqual(r.structuredContent.requiredDependencies, ["motion@>=11 <14"]);
});

test("list_icons paginates with a cursor", async () => {
  const p1 = await rpc([
    init,
    inited,
    { jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "list_icons", arguments: { limit: 10 } } },
  ]);
  const s1 = p1.find((m) => m.id === 2).result.structuredContent;
  assert.equal(s1.count, 10);
  assert.ok(s1.nextCursor);

  const p2 = await rpc([
    init,
    inited,
    {
      jsonrpc: "2.0",
      id: 2,
      method: "tools/call",
      params: { name: "list_icons", arguments: { limit: 10, cursor: s1.nextCursor } },
    },
  ]);
  const s2 = p2.find((m) => m.id === 2).result.structuredContent;
  assert.notEqual(s1.icons[0].name, s2.icons[0].name);
});

test("no stray writes to stdout (every line is valid JSON-RPC)", async () => {
  const out = await rpc([init, inited, { jsonrpc: "2.0", id: 2, method: "tools/list" }]);
  for (const line of out) assert.equal(line.jsonrpc, "2.0");
});
