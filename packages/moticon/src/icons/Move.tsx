"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Move({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "drag"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <motion.path
          variants={{
            rest: { y: 0 },
            drag: { y: -2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m9 5 3-3 3 3"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            drag: { y: 2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m15 19-3 3-3-3"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drag: { x: 2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m19 9 3 3-3 3"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drag: { x: -2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m5 9-3 3 3 3"
        />
      </motion.g>
    </svg>
  );
}