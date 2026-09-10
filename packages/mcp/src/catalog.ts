/**
 * The moticon catalog, loaded once from the build-time artifact
 * src/generated/icon-data.json (see scripts/build-icon-data.mjs).
 *
 * No runtime dependency on @moticon/react's private file layout — everything
 * the server serves is frozen into that JSON at build time.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export interface IconCapabilities {
  stateful: boolean;
  states?: string[];
  controllable: boolean;
}

export interface IconEntry {
  name: string;
  slug: string;
  trigger: string;
  mechanic: string;
  category: string;
  categories: string[];
  tags: string[];
  aliases: string[];
  deprecated: boolean;
  capabilities: IconCapabilities;
  needsHelper: boolean;
  source: string;
}

interface IconData {
  generatedFrom: string;
  iconCount: number;
  helper: { name: string; source: string };
  icons: IconEntry[];
}

const here = dirname(fileURLToPath(import.meta.url));

function loadData(): IconData {
  // dist/catalog.js and dist/generated/icon-data.json after build;
  // src/catalog.ts and src/generated/icon-data.json in dev via tsx.
  const candidates = [
    join(here, "generated", "icon-data.json"),
    join(here, "..", "src", "generated", "icon-data.json"),
  ];
  for (const path of candidates) {
    try {
      return JSON.parse(readFileSync(path, "utf-8")) as IconData;
    } catch {
      /* try next */
    }
  }
  throw new Error(
    "moticon-mcp: icon-data.json not found — the package build is incomplete.",
  );
}

const data = loadData();

export const HELPER = data.helper;
export const ICON_DATA_SOURCE = data.generatedFrom;

/** Live icons only (no deprecated), name-sorted. */
export const icons: IconEntry[] = data.icons
  .filter((i) => !i.deprecated)
  .sort((a, b) => a.name.localeCompare(b.name));

export const iconNames: string[] = icons.map((i) => i.name);

const byName = new Map(icons.map((i) => [i.name, i]));

export function getIcon(name: string): IconEntry | undefined {
  return byName.get(name);
}

export const catalogSummary = {
  name: "moticon",
  iconCount: icons.length,
  categories: [...new Set(icons.map((i) => i.category))].sort(),
  triggers: [...new Set(icons.map((i) => i.trigger))].sort(),
  mechanics: [...new Set(icons.map((i) => i.mechanic))].sort(),
};
