"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Beaker({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "bubble"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M4.5 3h15" />
        <path fill="transparent" d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />

        <motion.path
          style={{ transformOrigin: "12px 14px" }}
          variants={{
            rest: { scaleX: 1, y: 0 },
            bubble: {
              scaleX: [1, 1.05, 0.97, 1.02, 1],
              y: [0, -0.6, 0.15, -0.1, 0],
              transition: { duration: 0.72, ease: "easeInOut", times: [0, 0.24, 0.5, 0.76, 1] },
            },
          }}
          d="M6 14h12"
        />
      </motion.g>
    </svg>
  );
}
