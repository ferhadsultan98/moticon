"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Scissors({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "snip"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "6px", originY: "6px" }}
          variants={{
            rest: { rotate: 0 },
            snip: { rotate: [0, 12, 0], transition: { duration: 0.3, ease: "easeInOut" } },
          }}
        >
          <circle cx="6" cy="6" r="3" />
          <path d="M8.12 8.12 12 12" />
          <path d="M20 4 8.12 15.88" />
        </motion.g>
        <motion.g
          style={{ originX: "6px", originY: "18px" }}
          variants={{
            rest: { rotate: 0 },
            snip: { rotate: [0, -12, 0], transition: { duration: 0.3, ease: "easeInOut" } },
          }}
        >
          <circle cx="6" cy="18" r="3" />
          <path d="M14.8 14.8 20 20" />
        </motion.g>
      </motion.g>
    </svg>
  );
}