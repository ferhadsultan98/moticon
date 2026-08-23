"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Crosshair({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "focus"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <motion.line
          variants={{
            rest: { x1: 22, x2: 18 },
            focus: { x1: [26, 22], x2: [22, 18], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          x1="22"
          x2="18"
          y1="12"
          y2="12"
        />
        <motion.line
          variants={{
            rest: { x1: 6, x2: 2 },
            focus: { x1: [2, 6], x2: [-2, 2], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          x1="6"
          x2="2"
          y1="12"
          y2="12"
        />
        <motion.line
          variants={{
            rest: { y1: 6, y2: 2 },
            focus: { y1: [2, 6], y2: [-2, 2], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          x1="12"
          x2="12"
          y1="6"
          y2="2"
        />
        <motion.line
          variants={{
            rest: { y1: 22, y2: 18 },
            focus: { y1: [26, 22], y2: [22, 18], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          x1="12"
          x2="12"
          y1="22"
          y2="18"
        />
      </motion.g>
    </svg>
  );
}