---
"@moticon/mcp": minor
---

MCP server rebuilt on the v2 SDK. Breaking changes (0.x — minor is the breaking
tier):

- **`@modelcontextprotocol/sdk` (v1) → `@modelcontextprotocol/server` (v2)**.
  Served via `serveStdio` so the server negotiates the modern 2026-07-28
  protocol *and* still serves legacy 2025 clients (Claude Code, Cursor).
- **`engines.node`: `>=18` → `>=20`** (v2 SDK requirement).
- **`list_libraries` removed** → use **`list_icons`** (paginated: `limit` +
  `cursor`).
- **`add_icon` contract changed**: the arbitrary `targetPath` is gone. The
  server now has a fixed workspace root (its launch directory, or `--root` /
  `MOTICON_PROJECT_ROOT`); a call may only choose a `projectSubdir` inside it.
  Absolute paths, `..`, drive/UNC prefixes and symlink/junction escapes are
  refused. Output schema adds `workspaceRoot`, `dependencyStatus`,
  `dependencyManifest`, `installedMotion`, `missingDependencies`,
  `suggestedCommand`.
- **Structured output** on every tool (`structuredContent` + `outputSchema`),
  **tool annotations** (`readOnlyHint` / `destructiveHint`), **structured
  errors** (`icon_not_found`, `escapes_root`, `symlink_escape`, `file_exists`,
  `helper_conflict`, …) — no stack traces.
- **Catalog decoupled from `@moticon/react`'s file layout**: the server reads a
  build-time artifact (`src/generated/icon-data.json`, generated from
  `packages/moticon/src/enhanced` via the shared source utility) instead of a
  sibling package's private `src/`. Icons added via `add_icon` are byte-for-byte
  what `npx shadcn add` writes.
- Deterministic tiered search with a curated intent-synonym map (no LLM).
- One read-only resource, `moticon://catalog`.
- Node `node:test` suite (protocol negotiation, search ranking, path/symlink
  safety, the write tool, dependency detection).
