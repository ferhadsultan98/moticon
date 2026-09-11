"use client";

import Link from "next/link";
import Image from "next/image";
import { REPO_URL, NPM_URL } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const MCP_URL = "https://www.npmjs.com/package/@moticon/mcp";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 font-mono text-xs text-muted sm:flex-row sm:px-6">
        <span className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt=""
            width={1190}
            height={807}
            className="h-4 w-auto opacity-80"
          />
          moticon · MIT license
        </span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link href="/icons" className="transition-colors hover:text-accent">
            Icons
          </Link>
          <Link href="/docs" className="transition-colors hover:text-accent">
            Docs
          </Link>
          <Link href="/playground" className="transition-colors hover:text-accent">
            Playground
          </Link>
          <Link href="/examples" className="transition-colors hover:text-accent">
            Examples
          </Link>
          <Link href="/changelog" className="transition-colors hover:text-accent">
            Changelog
          </Link>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("github_cta", { from: "footer" })}
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("npm_cta", { from: "footer" })}
            className="transition-colors hover:text-accent"
          >
            npm
          </a>
          <a
            href={MCP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            MCP
          </a>
        </div>
      </div>
    </footer>
  );
}
