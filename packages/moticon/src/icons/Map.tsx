"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Map({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "unfold"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
        />
        <motion.path
          style={{ originX: "9px", originY: "12px" }}
          variants={{
            rest: { scaleX: 1 },
            unfold: { scaleX: [1, 0.3, 1], transition: { duration: 0.45, ease: "easeInOut" } },
          }}
          d="M9 3.236v15"
        />
        <motion.path
          style={{ originX: "15px", originY: "12px" }}
          variants={{
            rest: { scaleX: 1 },
            unfold: { scaleX: [1, 0.3, 1], transition: { duration: 0.45, ease: "easeInOut", delay: 0.05 } },
          }}
          d="M15 5.764v15"
        />
      </motion.g>
    </svg>
  );
}