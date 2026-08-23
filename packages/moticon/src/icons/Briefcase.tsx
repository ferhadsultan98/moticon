"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Briefcase({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "unlatch"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
        <motion.path
          style={{ originX: "12px", originY: "6px" }}
          variants={{
            rest: { rotate: 0, scaleY: 1 },
            unlatch: { rotate: -4, scaleY: 0.92, transition: { duration: 0.3, ease: "backOut" } },
          }}
          d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
        />
      </motion.g>
    </svg>
  );
}