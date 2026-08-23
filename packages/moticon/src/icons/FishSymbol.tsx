"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function FishSymbol({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}: MoticonIconProps) {
  const reduced = useReducedMotion();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      {...props}
    >
      <motion.path
        initial="rest"
        whileHover={reduced ? undefined : "swim"}
        variants={{
          rest: { pathLength: 1 },
          swim: { pathLength: [0, 1], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
        d="M2 16s9-15 20-4C11 23 2 8 2 8"
      />
    </svg>
  );
}