"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Sparkles({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "twinkle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          fill="transparent"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scale: 1 },
            twinkle: { scale: [1, 1.15, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twinkle: { opacity: [1, 0.2, 1], transition: { duration: 0.4, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M20 2v4"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            twinkle: { opacity: [1, 0.2, 1], transition: { duration: 0.4, ease: "easeInOut", delay: 0.1 } },
          }}
          d="M22 4h-4"
        />
        <motion.circle
          variants={{
            rest: { opacity: 1 },
            twinkle: { opacity: [1, 0.2, 1], transition: { duration: 0.4, ease: "easeInOut", delay: 0.25 } },
          }}
          cx="4"
          cy="20"
          r="2"
        />
      </motion.g>
    </svg>
  );
}