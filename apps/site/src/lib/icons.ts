import * as MoticonIcons from "moticon";
import { iconRegistry } from "moticon/registry";
import type { MoticonIconMeta } from "moticon/registry";
import type { MoticonIconProps } from "moticon";
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
