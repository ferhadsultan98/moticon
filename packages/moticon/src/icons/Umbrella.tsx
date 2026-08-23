"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Umbrella({
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
      <motion.g
        style={{ originX: "12px", originY: "13px" }}
        initial="rest"
        whileHover={reduced ? undefined : "open"}
        variants={{
          rest: { scaleX: 1, scaleY: 1 },
          open: { scaleX: 1.1, scaleY: 0.95, transition: { duration: 0.3, ease: "backOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 13v7a2 2 0 0 0 4 0" />
        <path d="M12 2v2" />
        <path
          fill="transparent"
          d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"
        />
      </motion.g>
    </svg>
  );
}