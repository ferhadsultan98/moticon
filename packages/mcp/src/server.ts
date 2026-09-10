import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { catalogSummary, getIcon, iconNames, icons, ICON_DATA_SOURCE } from "./catalog.js";
import { searchIcons } from "./search.js";
import { resolveName, nearestNames, rewriteHelperImport, DEFAULT_HELPER_IMPORT } from "./name.js";
import { writeIcon } from "./writer.js";
import { WORKSPACE_ROOT } from "./root.js";
import { checkMotion, MOTION_DEP } from "./deps.js";

const SITE = "https://moticon-web.vercel.app";

function packageVersion(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  for (const p of [join(here, "..", "package.json"), join(here, "..", "..", "package.json")]) {
    try {
      return JSON.parse(readFileSync(p, "utf-8")).version as string;
    } catch {
      /* next */
    }
  }
  return "0.0.0";
}

type ErrorCode =
  | "icon_not_found"
  | "invalid_name"
  | "invalid_path"
  | "null_byte"
  | "absolute_destination"
  | "drive_or_unc"
  | "escapes_root"
  | "symlink_escape"
  | "not_tsx"
  | "file_exists"
  | "helper_conflict"
  | "source_unavailable"
  | "write_failed";

/** A structured tool error, returned as isError + text + structuredContent. */
function toolError(code: ErrorCode, message: string, extra: Record<string, unknown> = {}) {
  return {
    isError: true,
    content: [{ type: "text" as const, text: `${code}: ${message}` }],
    structuredContent: { error: code, message, ...extra },
  };
}

function ok(structured: Record<string, unknown>, text: string) {
  return {
    content: [{ type: "text" as const, text }],
    structuredContent: structured,
  };
}

export function buildServer(): McpServer {
  const server = new McpServer(
    {
      name: "moticon",
      title: "moticon animated icons",
      version: packageVersion(),
    },
    {
      capabilities: { tools: {}, resources: {} },
      instructions:
        "moticon is a library of animated React icons, each modeling a real physical " +
        "motion. Use search_icons to find an icon by meaning or motion, get_icon for " +
        "one icon's detail, add_icon to vendor an icon's component into a project, and " +
        "list_icons to page the catalog. Do not guess component names — search first. " +
        `add_icon writes only inside this server's workspace root (${WORKSPACE_ROOT}).`,
    },
  );

  // --- search_icons ----------------------------------------------------
  server.registerTool(
    "search_icons",
    {
      title: "Search moticon icons",
      description:
        "Find moticon animated React icons by visual meaning, object, action, alias, " +
        "motion mechanic, category or trigger. Returns a short ranked list with a " +
        "one-line reason each — no source code. Call this before guessing an icon name.",
      inputSchema: z.object({
        query: z
          .string()
          .min(1)
          .describe('What the icon should show or do, e.g. "notification", "cut", "download".'),
        category: z.string().optional().describe('Restrict to a category, e.g. "Devices & Tech".'),
        trigger: z.enum(["hover", "tap"]).optional().describe("Restrict to icons animated on this trigger."),
        mechanic: z.string().optional().describe('Restrict to a motion mechanic, e.g. "swing".'),
        limit: z.number().int().min(1).max(20).optional().describe("Max results (default 8, hard max 20)."),
      }),
      outputSchema: z.object({
        query: z.string(),
        count: z.number(),
        results: z.array(
          z.object({
            name: z.string(),
            aliases: z.array(z.string()),
            category: z.string(),
            mechanic: z.string(),
            trigger: z.string(),
            stateful: z.boolean(),
            controllable: z.boolean(),
            reason: z.string(),
          }),
        ),
      }),
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async ({ query, category, trigger, mechanic, limit }) => {
      const results = searchIcons(query, { category, trigger, mechanic }, limit ?? 8);
      const structured = { query, count: results.length, results };
      if (results.length === 0) {
        return ok(structured, `No moticon icons matched "${query}".`);
      }
      const text = results
        .map((r) => `${r.name} — ${r.category} · ${r.mechanic} on ${r.trigger} — ${r.reason}`)
        .join("\n");
      return ok(structured, text);
    },
  );

  // --- get_icon ------------------------------------------------------
  server.registerTool(
    "get_icon",
    {
      title: "Get one moticon icon",
      description:
        "Return metadata, capabilities, the npm import and the shadcn add URL for one " +
        "icon. Include the component source only when includeSource is true (it is " +
        "large). Name is matched loosely: \"Bell\", \"bell\" and \"bell-ring\" all work.",
      inputSchema: z.object({
        name: z.string().min(1).describe('Icon name, e.g. "Bell" or "bell-ring".'),
        includeSource: z
          .boolean()
          .optional()
          .describe("Include the full component TSX source (large). Default false."),
      }),
      outputSchema: z.object({
        name: z.string(),
        category: z.string(),
        mechanic: z.string(),
        trigger: z.string(),
        aliases: z.array(z.string()),
        tags: z.array(z.string()),
        capabilities: z.object({
          stateful: z.boolean(),
          states: z.array(z.string()).optional(),
          controllable: z.boolean(),
        }),
        npmImport: z.string(),
        shadcnAdd: z.string(),
        needsHelper: z.boolean(),
        source: z.string().optional(),
      }),
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async ({ name, includeSource }) => {
      const resolved = resolveName(name, iconNames);
      if (!resolved) {
        const near = nearestNames(name, iconNames, 3);
        return toolError(
          "icon_not_found",
          `no icon named "${name}". Closest: ${near.join(", ")}. Use search_icons to find one.`,
          { suggestions: near },
        );
      }
      const icon = getIcon(resolved)!;
      const structured: Record<string, unknown> = {
        name: icon.name,
        category: icon.category,
        mechanic: icon.mechanic,
        trigger: icon.trigger,
        aliases: icon.aliases,
        tags: icon.tags,
        capabilities: icon.capabilities,
        npmImport: `import { ${icon.name} } from "@moticon/react";`,
        shadcnAdd: `npx shadcn@latest add ${SITE}/r/${icon.slug}.json`,
        needsHelper: icon.needsHelper,
      };
      const displaySource = icon.needsHelper
        ? rewriteHelperImport(icon.source, DEFAULT_HELPER_IMPORT)
        : icon.source;
      if (includeSource) structured.source = displaySource;

      const text =
        `${icon.name} — ${icon.category}\n` +
        `motion: ${icon.mechanic} on ${icon.trigger}\n` +
        (icon.aliases.length ? `aliases: ${icon.aliases.join(", ")}\n` : "") +
        (icon.capabilities.stateful
          ? `stateful: states ${icon.capabilities.states?.join(", ")}\n`
          : "") +
        `import: import { ${icon.name} } from "@moticon/react";\n` +
        `shadcn: npx shadcn@latest add ${SITE}/r/${icon.slug}.json` +
        (icon.needsHelper ? `\nnote: also needs the moticon-motion helper (add_icon writes it for you)` : "") +
        (includeSource ? `\n\n${displaySource}` : "");
      return ok(structured, text);
    },
  );

  // --- add_icon ----------------------------------------------------
  server.registerTool(
    "add_icon",
    {
      title: "Add a moticon icon to the workspace",
      description:
        "Write one icon's React component into this server's workspace, the same file " +
        "`npx shadcn add` produces. Writes to <componentsDir>/moticon/<Name>.tsx and, " +
        "when the icon needs it, a shared helper to <libDir>/moticon-motion.tsx. The " +
        "workspace root is fixed when the server starts — you cannot point this at an " +
        "arbitrary directory, only at a subdirectory inside the root. Never overwrites " +
        "an existing file unless overwrite is true. Reports whether `motion` is " +
        "installed; it does not run any package manager.",
      inputSchema: z.object({
        name: z.string().min(1).describe('Icon name, e.g. "Bell" or "bell-ring".'),
        projectSubdir: z
          .string()
          .optional()
          .describe(
            "Optional subdirectory inside the workspace root to write under, e.g. " +
              '"apps/web". Must stay inside the root. Default: the root itself.',
          ),
        componentsDir: z
          .string()
          .optional()
          .describe('Components dir, relative to the (sub)directory. Default "components".'),
        libDir: z.string().optional().describe('Lib dir, relative to the (sub)directory. Default "lib".'),
        overwrite: z.boolean().optional().describe("Replace existing files. Default false."),
      }),
      outputSchema: z.object({
        icon: z.string(),
        workspaceRoot: z.string(),
        files: z.array(z.object({ path: z.string(), status: z.string() })),
        importPath: z.string(),
        requiredDependencies: z.array(z.string()),
        dependencyStatus: z.enum(["compatible", "missing", "incompatible", "unknown"]),
        installedMotion: z.string().nullable(),
        missingDependencies: z.array(z.string()),
        suggestedCommand: z.string().nullable(),
        dependencyManifest: z.string().nullable(),
      }),
      annotations: {
        // overwrite:true can replace an existing file, so the tool as a whole is
        // destructive. It is still idempotent: the same call with the same source
        // is a no-op ("unchanged").
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ name, projectSubdir, componentsDir, libDir, overwrite }) => {
      const resolved = resolveName(name, iconNames);
      if (!resolved) {
        const near = nearestNames(name, iconNames, 3);
        return toolError("icon_not_found", `no icon named "${name}". Closest: ${near.join(", ")}.`, {
          suggestions: near,
        });
      }
      const icon = getIcon(resolved)!;
      if (!icon.source) {
        return toolError("source_unavailable", `source for ${icon.name} is unavailable`);
      }

      const result = writeIcon(icon, {
        root: WORKSPACE_ROOT,
        subdir: projectSubdir ?? "",
        componentsDir: componentsDir ?? "components",
        libDir: libDir ?? "lib",
        overwrite: overwrite ?? false,
      });

      if ("error" in result) {
        return toolError(result.error, result.message, result.path ? { path: result.path } : {});
      }

      // writeIcon already refused any subdir that escapes the root, so reusing
      // it here for the manifest lookup is safe.
      const dep = checkMotion(WORKSPACE_ROOT, projectSubdir ?? "");
      const structured = {
        icon: icon.name,
        workspaceRoot: WORKSPACE_ROOT,
        files: result.files,
        importPath: result.importPath,
        requiredDependencies: dep.requiredDependencies,
        dependencyStatus: dep.dependencyStatus,
        installedMotion: dep.installedMotion,
        missingDependencies: dep.missingDependencies,
        suggestedCommand: dep.suggestedCommand,
        dependencyManifest: dep.dependencyManifest,
      };
      const text =
        result.files.map((f) => `${f.status}: ${f.path}`).join("\n") +
        `\n\nimport { ${icon.name} } from "${result.importPath}";` +
        `\n\nmotion (${MOTION_DEP}): ${dep.dependencyStatus}` +
        (dep.dependencyManifest ? ` [${dep.dependencyManifest}]` : "") +
        ` — ${dep.note}` +
        (dep.suggestedCommand ? `\nrun: ${dep.suggestedCommand}` : "");
      return ok(structured, text);
    },
  );

  // --- list_icons -----------------------------------------------------
  server.registerTool(
    "list_icons",
    {
      title: "List the moticon catalog",
      description:
        "Page through the whole catalog, name and category only. Use search_icons when " +
        "you know what you want; use this to browse. Returns `limit` icons plus a " +
        "`nextCursor` to pass back for the next page.",
      inputSchema: z.object({
        category: z.string().optional().describe("Restrict to one category."),
        limit: z.number().int().min(1).max(100).optional().describe("Page size, default 50."),
        cursor: z.string().optional().describe("`nextCursor` from a previous call."),
      }),
      outputSchema: z.object({
        total: z.number(),
        count: z.number(),
        icons: z.array(z.object({ name: z.string(), category: z.string(), mechanic: z.string() })),
        nextCursor: z.string().optional(),
      }),
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async ({ category, limit, cursor }) => {
      let pool = icons;
      if (category) {
        const c = category.toLowerCase();
        pool = pool.filter((i) => i.category.toLowerCase() === c);
      }
      const size = limit ?? 50;
      const start = cursor ? Math.max(0, parseInt(Buffer.from(cursor, "base64").toString(), 10) || 0) : 0;
      const page = pool.slice(start, start + size);
      const next = start + size < pool.length
        ? Buffer.from(String(start + size)).toString("base64")
        : undefined;

      const structured: Record<string, unknown> = {
        total: pool.length,
        count: page.length,
        icons: page.map((i) => ({ name: i.name, category: i.category, mechanic: i.mechanic })),
      };
      if (next) structured.nextCursor = next;

      const text =
        page.map((i) => `${i.name} (${i.category})`).join("\n") +
        (next ? `\n\n… ${pool.length - start - size} more — pass cursor "${next}"` : "");
      return ok(structured, text);
    },
  );

  // --- catalog resource ---------------------------------------------
  // One small read-only resource: the catalog shape (counts, categories,
  // mechanics, triggers). Lets a host show what the library covers without a
  // tool call. The full per-icon catalog is deliberately NOT a resource — it
  // would be a token bomb; that is what list_icons paginates.
  server.registerResource(
    "catalog",
    "moticon://catalog",
    {
      title: "moticon catalog overview",
      description: "Counts and the category / mechanic / trigger vocabulary of the moticon catalog.",
      mimeType: "application/json",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "application/json",
          text: JSON.stringify({ ...catalogSummary, source: ICON_DATA_SOURCE }, null, 2),
        },
      ],
    }),
  );

  return server;
}
