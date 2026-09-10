import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { buildServer } from "./server.js";

// serveStdio owns the era decision for the connection: it answers the
// `server/discover` probe a 2026-07-28 client sends, and still serves a client
// that opens with the plain 2025 `initialize` handshake. One McpServer instance
// is built per connection from this factory. `legacy` is left at its default
// ("serve") so Claude Code / Cursor and other 2025-era clients keep working.
const handle = serveStdio(() => buildServer(), {
  onerror: (err) => {
    process.stderr.write(`[moticon-mcp] ${err.message}\n`);
  },
});

const shutdown = () => {
  void handle.close().finally(() => process.exit(0));
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

process.on("unhandledRejection", (reason) => {
  process.stderr.write(
    `[moticon-mcp] unhandled rejection: ${
      reason instanceof Error ? reason.message : String(reason)
    }\n`,
  );
});
