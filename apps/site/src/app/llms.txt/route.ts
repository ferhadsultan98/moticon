import { SITE_URL, REPO_URL, NPM_URL } from "@/lib/site";
import { DOC_PAGES } from "@/lib/docs";

/**
 * /llms.txt — a short, plain-text map of the project for AI coding agents.
 * Not a Google ranking signal; it exists because moticon is a developer tool
 * and agents are a real audience. Deliberately small — no `llms-full.txt`
 * dump. The MCP server (@moticon/mcp) is the richer machine interface.
 */
export const dynamic = "force-static";

export function GET() {
  const body = `# moticon

> Open-source animated React icons. Each icon's animation models the real
> physical motion of the object (a bell rings, a heart beats), not a generic
> scale or rotate tween. TypeScript, tree-shakeable, respects
> prefers-reduced-motion, Next.js App Router compatible.

## Install

npm install @moticon/react motion

import { Bell } from "@moticon/react";
<Bell size={24} />

## Links

- Icon catalog: ${SITE_URL}/icons
- Documentation: ${SITE_URL}/docs
- npm package: ${NPM_URL}
- Source: ${REPO_URL}
- MCP server (for coding agents): https://www.npmjs.com/package/@moticon/mcp

## Docs

${DOC_PAGES.map((d) => `- ${d.title}: ${SITE_URL}/docs/${d.slug}`).join("\n")}

## Per-icon pages

Every icon has a page at ${SITE_URL}/icons/<Name> (PascalCase, e.g.
${SITE_URL}/icons/Bell) with its metadata, animation spec, install snippet and
related icons.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
