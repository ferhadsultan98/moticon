"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Cake({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "glow"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
        <path d="M2 21h20" />
        <path d="M7 8v3" />
        <path d="M12 8v3" />
        <path d="M17 8v3" />
        <motion.path
          variants={{
            rest: { opacity: 1, scale: 1 },
            glow: { opacity: [1, 0.3, 1], scale: [1, 1.3, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M7 4h.01"
        />
        <motion.path
          variants={{
            rest: { opacity: 1, scale: 1 },
            glow: {
              opacity: [1, 0.3, 1],
              scale: [1, 1.3, 1],
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
            },
          }}
          d="M12 4h.01"
        />
        <motion.path
          variants={{
            rest: { opacity: 1, scale: 1 },
            glow: {
              opacity: [1, 0.3, 1],
              scale: [1, 1.3, 1],
              transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 },
            },
          }}
          d="M17 4h.01"
        />
      </motion.g>
    </svg>
  );
}