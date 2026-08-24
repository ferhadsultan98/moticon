import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  LIBRARIES,
  getIconMeta,
  getIconSource,
  importSnippet,
  searchIcons,
} from "./tools.js";

const SEARCH_ICONS_SCHEMA = {
  query: z.string().describe('Search text, e.g. "bell", "notification", "swing"'),
  limit: z.number().int().min(1).max(50).optional(),
};

const GET_ICON_SCHEMA = {
  name: z.string().describe('Exact icon component name, e.g. "Bell"'),
};

const ADD_ICON_SCHEMA = {
  name: z.string().describe('Exact icon component name, e.g. "Bell"'),
  targetPath: z
    .string()
    .describe(
      'Absolute file path to write the component to, e.g. "/home/user/project/src/icons/Bell.tsx"'
    ),
};

const LIST_LIBRARIES_SCHEMA = {};

export function createServer() {
  const server = new McpServer({
    name: "moticon-mcp",
    version: "0.1.0",
  });

  server.registerTool(
    "search_icons",
    {
      title: "Search moticon icons",
      description:
        "Fuzzy-search the moticon icon catalog by name, alias, tag, category, or animation mechanic. Returns matching icons with their metadata.",
      inputSchema: SEARCH_ICONS_SCHEMA,
    },
    async ({ query, limit }) => {
      const results = searchIcons(query, limit ?? 20);
      return {
        content: [
          {
            type: "text",
            text:
              results.length === 0
                ? `No icons matched "${query}".`
                : JSON.stringify(results, null, 2),
          },
        ],
      };
    }
  );

  server.registerTool(
    "get_icon",
    {
      title: "Get moticon icon source",
      description:
        "Return a single icon's full React component source code and a ready-to-use import/JSX snippet. Read-only — does not write any files.",
      inputSchema: GET_ICON_SCHEMA,
    },
    async ({ name }) => {
      const meta = getIconMeta(name);
      const source = getIconSource(name);

      if (!meta || !source) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `No icon named "${name}" in the moticon catalog. Use search_icons to find the right name.`,
            },
          ],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              { meta, source, snippet: importSnippet(name) },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.registerTool(
    "add_icon",
    {
      title: "Add moticon icon to a project",
      description:
        "Write one icon's React component source into the caller's project at the given file path, and return the import/JSX snippet to use it. The @moticon/react package itself must still be installed (npm install @moticon/react motion) — this tool only writes the component file it was asked for, mirroring how it's already vendored in this monorepo.",
      inputSchema: ADD_ICON_SCHEMA,
    },
    async ({ name, targetPath }) => {
      const source = getIconSource(name);
      if (!source) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `No icon named "${name}" in the moticon catalog. Use search_icons to find the right name.`,
            },
          ],
        };
      }

      const { writeFileSync, mkdirSync } = await import("node:fs");
      const { dirname } = await import("node:path");
      mkdirSync(dirname(targetPath), { recursive: true });
      writeFileSync(targetPath, source, "utf-8");

      return {
        content: [
          {
            type: "text",
            text: `Wrote ${name}.tsx to ${targetPath}.\n\nUsage:\n${importSnippet(
              name
            ).replace('from "@moticon/react"', `from "${targetPath}"`)}`,
          },
        ],
      };
    }
  );

  server.registerTool(
    "list_libraries",
    {
      title: "List moticon libraries",
      description: "List the icon libraries this server has access to, with their icon counts.",
      inputSchema: LIST_LIBRARIES_SCHEMA,
    },
    async () => ({
      content: [{ type: "text", text: JSON.stringify(LIBRARIES, null, 2) }],
    })
  );

  return server;
}
