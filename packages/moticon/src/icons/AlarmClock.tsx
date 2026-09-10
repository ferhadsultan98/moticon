"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function AlarmClock({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "ring"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.g
          style={{ transformOrigin: "12px 13px" }}
          variants={{
            rest: { rotate: 0, y: 0 },
            ring: {
              rotate: [0, -9, 10, -7, 4, -2, 0],
              y: [0, -0.3, 0, 0, 0, 0, 0],
              transition: { duration: 0.7, ease: "easeInOut", times: [0, 0.12, 0.3, 0.5, 0.68, 0.85, 1] },
            },
          }}
        >
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2 2" />
        </motion.g>

        <motion.path
          d="M5 3 2 6"
          style={{ transformOrigin: "5px 3px" }}
          variants={{
            rest: { rotate: 0 },
            ring: {
              rotate: [0, -8, 9, -6, 3, 0],
              transition: { duration: 0.7, ease: "easeInOut", times: [0, 0.12, 0.3, 0.5, 0.72, 1] },
            },
          }}
        />

        <motion.path
          d="m22 6-3-3"
          style={{ transformOrigin: "22px 6px" }}
          variants={{
            rest: { rotate: 0 },
            ring: {
              rotate: [0, 8, -9, 6, -3, 0],
              transition: { duration: 0.7, ease: "easeInOut", times: [0, 0.12, 0.3, 0.5, 0.72, 1] },
            },
          }}
        />

        <path d="M6.38 18.7 4 21" />
        <path d="M17.64 18.67 20 21" />
      </motion.g>
    </svg>
  );
}
