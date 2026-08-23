"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Tv({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "flicker"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.rect
          variants={{
            rest: { opacity: 1, scaleY: 1 },
            flicker: {
              opacity: [1, 0.3, 1, 0.5, 1],
              scaleY: [1, 0.9, 1],
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
          style={{ originX: "12px", originY: "14.5px" }}
          width="20"
          height="15"
          x="2"
          y="7"
          rx="2"
        />
        <path d="m17 2-5 5-5-5" />
      </motion.g>
    </svg>
  );
}