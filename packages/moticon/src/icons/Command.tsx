"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Command({
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
        whileTap={reduced ? undefined : "press"}
        variants={{
          rest: { pathLength: 1, rotate: 0 },
          press: {
            pathLength: [0.6, 1],
            rotate: [0, 90],
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
        d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
      />
    </svg>
  );
}