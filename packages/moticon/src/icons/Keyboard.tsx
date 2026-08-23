"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Keyboard({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "type"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M7 16h10" />
        <motion.path
          variants={{
            rest: { y: 0 },
            type: { y: [0, 1, 0], transition: { duration: 0.15, ease: "easeOut", delay: 0 } },
          }}
          d="M6 8h.01"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            type: { y: [0, 1, 0], transition: { duration: 0.15, ease: "easeOut", delay: 0.08 } },
          }}
          d="M10 8h.01"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            type: { y: [0, 1, 0], transition: { duration: 0.15, ease: "easeOut", delay: 0.16 } },
          }}
          d="M14 8h.01"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            type: { y: [0, 1, 0], transition: { duration: 0.15, ease: "easeOut", delay: 0.24 } },
          }}
          d="M18 8h.01"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            type: { y: [0, 1, 0], transition: { duration: 0.15, ease: "easeOut", delay: 0.06 } },
          }}
          d="M8 12h.01"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            type: { y: [0, 1, 0], transition: { duration: 0.15, ease: "easeOut", delay: 0.14 } },
          }}
          d="M12 12h.01"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            type: { y: [0, 1, 0], transition: { duration: 0.15, ease: "easeOut", delay: 0.22 } },
          }}
          d="M16 12h.01"
        />
      </motion.g>
    </svg>
  );
}