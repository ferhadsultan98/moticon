import metadata from "@/generated/icon-metadata.json";
import * as MoticonIcons from "moticon";
import type { MoticonIconProps } from "moticon";
import type { ComponentType } from "react";

export interface IconMeta {
  name: string;
  trigger: "hover" | "tap";
  mechanic: string;
  duration: number | null;
  ease: string | null;
  stiffness: number | null;
  category: string;
  tags: string[];
  aliases: string[];
  contributors: string[];
  deprecated: boolean;
}

export const iconMeta = metadata as IconMeta[];

export const iconComponents = MoticonIcons as unknown as Record<
  string,
  ComponentType<MoticonIconProps>
>;

export function getIconComponent(name: string) {
  return iconComponents[name];
}
