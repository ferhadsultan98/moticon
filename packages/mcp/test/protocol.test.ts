import { test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";

const entry = join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "index.js");

type Mode = "legacy" | "auto" | { pin: string };

async function connectWith(mode: Mode) {
  const client = new Client(
    { name: "protocol-test", version: "0" },
    { versionNegotiation: { mode } },
  );
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [entry],
    stderr: "ignore",
  });
  await client.connect(transport);
  return client;
}

/** The connection's negotiated protocol version (protected field, readable at runtime). */
function negotiated(client: Client): string | undefined {
  return (client as unknown as { _negotiatedProtocolVersion?: string })._negotiatedProtocolVersion;
}

test("legacy client negotiates the 2025 era and sees all four tools", async () => {
  const client = await connectWith("legacy");
  assert.match(negotiated(client) ?? "", /^2025-/);
  const tools = await client.listTools();
  assert.deepEqual(tools.tools.map((t) => t.name).sort(), [
    "add_icon",
    "get_icon",
    "list_icons",
    "search_icons",
  ]);
  await client.close();
});

test("auto negotiation reaches the modern 2026-07-28 era", async () => {
  const client = await connectWith("auto");
  assert.equal(negotiated(client), "2026-07-28");
  const tools = await client.listTools();
  assert.equal(tools.tools.length, 4);
  await client.close();
});

test("pinned 2026-07-28 negotiation succeeds and tools/call works", async () => {
  const client = await connectWith({ pin: "2026-07-28" });
  assert.equal(negotiated(client), "2026-07-28");
  const res = await client.callTool({ name: "search_icons", arguments: { query: "cut" } });
  const structured = (res as { structuredContent?: { results?: { name: string }[] } })
    .structuredContent;
  assert.equal(structured?.results?.[0]?.name, "Scissors");
  await client.close();
});
