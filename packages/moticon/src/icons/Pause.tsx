"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Pause({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "pause"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.rect
          style={{ originX: "16.5px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            pause: { scaleY: 0.75, transition: { duration: 0.2, ease: "easeOut" } },
          }}
          x="14"
          y="3"
          width="5"
          height="18"
          rx="1"
        />
        <motion.rect
          style={{ originX: "7.5px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            pause: { scaleY: 0.75, transition: { duration: 0.2, ease: "easeOut" } },
          }}
          x="5"
          y="3"
          width="5"
          height="18"
          rx="1"
        />
      </motion.g>
    </svg>
  );
}