"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Popcorn({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "pop"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
        />
        <path
          fill="transparent"
          d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
        />
        <motion.path
          style={{ originX: "10px", originY: "15px" }}
          variants={{
            rest: { y: 0 },
            pop: { y: [0, -3, 0], transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="M10 22 9 8"
        />
        <motion.path
          style={{ originX: "15px", originY: "15px" }}
          variants={{
            rest: { y: 0 },
            pop: { y: [0, -3, 0], transition: { duration: 0.35, ease: "easeOut", delay: 0.1 } },
          }}
          d="m14 22 1-14"
        />
      </motion.g>
    </svg>
  );
}