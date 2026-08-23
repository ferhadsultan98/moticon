"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Search({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "scan"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.circle
          cx="11"
          cy="11"
          r="8"
          style={{ originX: "11px", originY: "11px" }}
          variants={{
            rest: { scale: 1, x: 0, y: 0 },
            scan: {
              scale: [1, 1, 1.08, 1],
              x: [0, -1.5, 1.5, 0],
              y: [0, 1, -1, 0],
              transition: { duration: 0.7, ease: "easeInOut" },
            },
          }}
        />
        <motion.path
          d="m21 21-4.34-4.34"
          variants={{
            rest: { x: 0, y: 0 },
            scan: {
              x: [0, -1.5, 1.5, 0],
              y: [0, 1, -1, 0],
              transition: { duration: 0.7, ease: "easeInOut" },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}