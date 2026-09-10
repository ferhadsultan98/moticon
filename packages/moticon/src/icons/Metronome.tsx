"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Metronome({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "tick"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M8 21h8" />
        <path d="M6 21 12 3l6 18" />
        <motion.line
          x1="12"
          y1="18"
          x2="12"
          y2="8"
          style={{ originX: "12px", originY: "18px" }}
          variants={{
            rest: { rotate: 0 },
            tick: {
              rotate: [0, 18, -18, 18, -18, 0],
              transition: { duration: 1, ease: "easeInOut" },
            },
          }}
        />
        <circle cx="12" cy="18" r="1" fill={color} />
      </motion.g>
    </svg>
  );
}
