"use client";

import { CopyButton } from "@/components/CopyButton";

// Only claims capabilities that are true in the CURRENTLY PUBLISHED
// @moticon/mcp (0.1.2): search the catalog, get an icon's source, drop it in.
// Newer local-only features are deliberately not mentioned here.
const CONNECT = "claude mcp add moticon -- npx -y @moticon/mcp";

export function AgentSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-6 rounded-lg border border-border bg-surface p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              for AI coding agents
            </p>
            <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
              Let your agent find the icon.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
              moticon ships an{" "}
              <a
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border-strong underline-offset-2 hover:decoration-accent"
              >
                MCP
              </a>{" "}
              server. Connect it once and Claude Code, Cursor or any MCP client
              can search the catalog by meaning and pull the right component into
              your project.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="flex w-full items-center gap-2 overflow-x-auto rounded-md border border-border-strong bg-background px-3 py-2.5 font-mono text-[11px] sm:text-xs">
              <span className="shrink-0 text-muted">$</span>
              <span className="whitespace-nowrap text-foreground">{CONNECT}</span>
            </div>
            <CopyButton
              value={CONNECT}
              label="Copy connect command"
              variant="ghost"
              event="mcp_command_copied"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
