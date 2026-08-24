import * as MoticonIcons from "@moticon/react";
import { iconRegistry } from "@moticon/react/registry";
import type { MoticonIconMeta } from "@moticon/react/registry";
import type { MoticonIconProps } from "@moticon/react";
import type { ComponentType } from "react";

export type IconMeta = MoticonIconMeta;

export const iconMeta = iconRegistry;

export const iconComponents = MoticonIcons as unknown as Record<
  string,
  ComponentType<MoticonIconProps>
>;

export function getIconComponent(name: string) {
  return iconComponents[name];
}
