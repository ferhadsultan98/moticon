![moticon — icons that move with intent](https://raw.githubusercontent.com/ferhadsultan98/moticon/main/github-readme.png)

# @moticon/mcp

[![npm version](https://img.shields.io/npm/v/@moticon/mcp?color=3dff9e)](https://www.npmjs.com/package/@moticon/mcp)
[![license](https://img.shields.io/npm/l/@moticon/mcp?color=3dff9e)](https://github.com/ferhadsultan98/moticon/blob/main/packages/mcp/LICENSE)

A [Model Context Protocol](https://modelcontextprotocol.io) server that lets AI
coding agents — Claude Code, Cursor, and any other MCP client — find the right
[moticon](https://moticon-web.vercel.app/) animated React icon by intent and drop
its component straight into a project.

Every operation is deterministic and local. No network calls, no LLM inside the
server — it only reads a frozen copy of the moticon catalog and writes component
files you ask for.

## Tools

| Tool | What it does |
|---|---|
| **search_icons** | Find icons by visual meaning, object, action, alias, motion mechanic, category or trigger. Returns a short ranked list with a one-line reason each — no source code. |
| **get_icon** | One icon's metadata, capabilities, npm import and shadcn add URL. Component source only when you pass `includeSource: true`. |
| **add_icon** | Write an icon's component into the server's workspace — the same file `npx shadcn add` produces. Writes to `<componentsDir>/moticon/<Name>.tsx`, plus a shared `moticon-motion.tsx` helper when the icon needs one. Never overwrites without `overwrite: true`. Reports whether `motion` is installed. |
| **list_icons** | Page through the whole catalog (name + category), with `limit` and `cursor`. |

There is also one read-only resource, `moticon://catalog`, with the catalog's
counts and its category / mechanic / trigger vocabulary.

## Setup

### Claude Code

```bash
claude mcp add moticon -- npx -y @moticon/mcp
```

Run this from your project directory — the server takes that directory as its
workspace root and only ever writes inside it.

### Cursor / any MCP client

```json
{
  "mcpServers": {
    "moticon": {
      "command": "npx",
      "args": ["-y", "@moticon/mcp"]
    }
  }
}
```

To force a specific workspace root regardless of where the client launches the
server, pass `--root <path>` in `args`, or set `MOTICON_PROJECT_ROOT`.

Requires Node 20+.

## Using an added icon

`add_icon` writes the component and tells you the import path. Icons render with
[`motion`](https://motion.dev) (`motion@>=11 <14`) — the tool checks the
`package.json` of the effective project directory
(`<workspace root>/<projectSubdir>`, falling back to the workspace root when the
subdirectory has none) and reports `dependencyStatus` (`compatible` / `missing`
/ `incompatible`), `dependencyManifest` (which package.json it read, relative to
the root) and a `suggestedCommand`. It never runs a package manager itself:

```bash
npm install "motion@>=11 <14"
```

Icons respect `prefers-reduced-motion` automatically.

### `add_icon` safety

- **the workspace root is fixed when the server starts** (client's launch
  directory, or `--root` / `MOTICON_PROJECT_ROOT`). A tool call cannot change
  it — it can only pick a `projectSubdir` inside it.
- `..`, absolute paths, drive letters and UNC prefixes in `projectSubdir` /
  `componentsDir` / `libDir` are rejected
- a symlink or junction that would lead outside the root is rejected
  (`symlink_escape`) — the check `realpath`s the deepest existing ancestor
- an existing file is never overwritten unless you pass `overwrite: true`; an
  already-identical file is reported as `unchanged`
- if a *different* `moticon-motion.tsx` already exists, `add_icon` stops with a
  `helper_conflict` instead of clobbering it

Errors come back structured (`icon_not_found`, `escapes_root`, `symlink_escape`,
`file_exists`, `helper_conflict`, …), never as a stack trace.

## Breaking changes since 0.1.2 (unreleased)

The next release is a **minor bump with breaking API changes**:

- **`list_libraries` removed** — use `list_icons` (paginated: `limit` + `cursor`).
- **`add_icon.targetPath` removed** — writes now go to a fixed workspace root
  (client launch directory, or `--root` / `MOTICON_PROJECT_ROOT`); a call can
  only choose a `projectSubdir` inside it, relative only.
- **writes are restricted to the configured workspace root** — an absolute path,
  `..`, drive/UNC prefix, or an escaping symlink/junction is refused.
- **`add_icon` output schema changed** — now includes `workspaceRoot`,
  `dependencyStatus`, `dependencyManifest`, `installedMotion`,
  `missingDependencies`, `suggestedCommand`.
- **Node minimum is now 20** (was 18.19) — required by the v2 MCP SDK.

## Development

```bash
npm install
npm run build      # generates the catalog artifact, then bundles with tsup
npm test           # node:test — protocol negotiation, search ranking, path/symlink safety, the write tool, dependency detection
```

The catalog artifact (`src/generated/icon-data.json`) is produced from
`packages/moticon/src/enhanced/*.tsx` — the exact component layer `@moticon/react`
publishes — using the shared transforms in
`packages/moticon/scripts/lib/icon-source.mjs`, the same code the shadcn registry
uses. An icon added via `add_icon` is byte-for-byte what `npx shadcn add` writes.

## Author

[Farhad Sultanov](https://www.linkedin.com/in/farhadsultan/) · [GitHub](https://github.com/ferhadsultan98)

## License

MIT
