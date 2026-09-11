"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Trumpet({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "blare"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "10px", originY: "13px" }}
          variants={{
            rest: { x: 0 },
            blare: {
              x: [0, -1.5, 0, -1, 0],
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <path d="M3 8.5C3 7 4 6 5.5 6H14l4-3v14l-4-3H8" />
          <path d="M3 8.5V13c0 1.5 1 2.5 2.5 2.5H8V6" />
          <path d="M11 6v9" />
          <path d="M18 6.5c1.5 0 2.5 2 2.5 4s-1 4-2.5 4" />
        </motion.g>
        <motion.g
          variants={{
            rest: { opacity: 0, scale: 0.6 },
            blare: {
              opacity: [0, 1, 0],
              scale: [0.6, 1.3, 1.6],
              x: [0, 3, 6],
              transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
            },
          }}
          style={{ originX: "21px", originY: "9px" }}
        >
          <path d="M21 6c1 1 1 5 0 6" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
