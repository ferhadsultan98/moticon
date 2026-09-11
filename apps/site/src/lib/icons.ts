import { iconRegistry } from "@moticon/react/registry";
import type { MoticonIconMeta } from "@moticon/react/registry";

export type IconMeta = MoticonIconMeta;

/**
 * Icon metadata only — the registry export, no components. Import this from
 * anywhere that just needs names / categories / mechanics (grids, sitemaps,
 * search, taxonomy). It does NOT pull the icon component barrel.
 *
 * For the actual React components, import from "@/lib/icon-components" — that
 * namespace-imports all 343 and should only be reached by pages that render a
 * live, interactive set (the /icons browser, the search palette, the playground).
 */
export const iconMeta = iconRegistry;
