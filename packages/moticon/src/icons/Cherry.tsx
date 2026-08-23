"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Cherry({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "bounce"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />
        <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
        <motion.path
          variants={{
            rest: { y: 0, scale: 1 },
            bounce: { y: [0, -3, 0], scale: [1, 1.08, 1], transition: { duration: 0.45, ease: "easeOut" } },
          }}
          fill="transparent"
          d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
        />
        <motion.path
          variants={{
            rest: { y: 0, scale: 1 },
            bounce: {
              y: [0, -3, 0],
              scale: [1, 1.08, 1],
              transition: { duration: 0.45, ease: "easeOut", delay: 0.1 },
            },
          }}
          fill="transparent"
          d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
        />
      </motion.g>
    </svg>
  );
}