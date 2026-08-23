"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function LayoutGrid({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "pulse"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <motion.rect
          style={{ originX: "17.5px", originY: "6.5px" }}
          variants={{
            rest: { scale: 1 },
            pulse: { scale: [1, 1.12, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          width="7"
          height="7"
          x="14"
          y="3"
          rx="1"
        />
        <motion.rect
          style={{ originX: "17.5px", originY: "17.5px" }}
          variants={{
            rest: { scale: 1 },
            pulse: { scale: [1, 1.12, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } },
          }}
          width="7"
          height="7"
          x="14"
          y="14"
          rx="1"
        />
        <motion.rect
          style={{ originX: "6.5px", originY: "17.5px" }}
          variants={{
            rest: { scale: 1 },
            pulse: { scale: [1, 1.12, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.2 } },
          }}
          width="7"
          height="7"
          x="3"
          y="14"
          rx="1"
        />
      </motion.g>
    </svg>
  );
}