import * as MoticonIcons from "@moticon/react";
import type { MoticonIconProps } from "@moticon/react";
import type { ComponentType } from "react";

/**
 * The full icon component set as a lookup map. This namespace import pulls
 * every icon module, so only import from here in a component that genuinely
 * renders an arbitrary, interactive set:
 *   - IconsBrowser (/icons)
 *   - SearchCommand (Cmd+K palette, lazy-loaded)
 *   - Playground
 *   - AutoAnimateIcon (used by the above)
 *
 * Everything else (homepage grid teaser, related-icon lists, OG images) uses
 * StaticGlyph, which draws geometry from icon-details.json and ships no barrel.
 */
export const iconComponents = MoticonIcons as unknown as Record<
  string,
  ComponentType<MoticonIconProps>
>;

export function getIconComponent(name: string) {
  return iconComponents[name];
}
