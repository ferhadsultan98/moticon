"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Antenna({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "receive"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 16v6" />
        <motion.path
          variants={{
            rest: { y: 0 },
            receive: { y: [-1, 0], transition: { duration: 0.2, delay: 0.15 } },
          }}
          d="M2 12 7 2"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            receive: { y: [-1, 0], transition: { duration: 0.2, delay: 0.1 } },
          }}
          d="m7 12 5-10"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            receive: { y: [-1, 0], transition: { duration: 0.2, delay: 0.05 } },
          }}
          d="m12 12 5-10"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            receive: { y: [-1, 0], transition: { duration: 0.2, delay: 0 } },
          }}
          d="m17 12 5-10"
        />
        <path d="M4.5 7h15" />
      </motion.g>
    </svg>
  );
}