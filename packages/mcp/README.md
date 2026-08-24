# @moticon/mcp

A [Model Context Protocol](https://modelcontextprotocol.io) server for the [moticon](https://github.com/ferhadsultan98/moticon) icon library. Lets AI coding agents (Claude Code, Cursor, etc.) search the icon catalog and drop animated React icons straight into a project.

## Tools

- **search_icons** — fuzzy-search by name, alias, tag, category, or animation mechanic.
- **get_icon** — read-only: returns an icon's full component source, metadata, and an import/JSX snippet.
- **add_icon** — writes an icon's component file to a path in the caller's project.
- **list_libraries** — lists the icon libraries this server has access to.

## Setup

### Claude Code

```bash
claude mcp add moticon -- npx -y @moticon/mcp
```

### Manual (Cursor, or any MCP-compatible client)

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

## Requirements

Icons returned by this server depend on the `motion` package. After adding an icon
to your project with `add_icon`, make sure `@moticon/react` and `motion` are installed:

```bash
npm install @moticon/react motion
```

## Development

```bash
npm install
npm run build   # bundles src/index.ts with tsup
npm run dev     # watch mode
```
