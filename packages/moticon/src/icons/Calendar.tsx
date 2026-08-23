"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Calendar({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "flip"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <motion.path
          style={{ originX: "8px", originY: "2px" }}
          variants={{
            rest: { rotate: 0 },
            flip: { rotate: [0, -25, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="M8 2v3"
        />
        <motion.path
          style={{ originX: "16px", originY: "2px" }}
          variants={{
            rest: { rotate: 0 },
            flip: { rotate: [0, -25, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.08 } },
          }}
          d="M16 2v3"
        />
      </motion.g>
    </svg>
  );
}