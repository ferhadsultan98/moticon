"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Anchor({
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
      <motion.g
        style={{ originX: "12px", originY: "4px" }}
        initial="rest"
        whileHover={reduced ? undefined : "sway"}
        variants={{
          rest: { rotate: 0 },
          sway: { rotate: [0, 6, -6, 3, 0], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 6v16" />
        <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
        <path d="M9 11h6" />
        <circle cx="12" cy="4" r="2" />
      </motion.g>
    </svg>
  );
}