"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Ship({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "sail"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "12px", originY: "16px" }}
          variants={{
            rest: { rotate: 0 },
            sail: {
              rotate: [0, -5, 5, -3, 2, 0],
              transition: { duration: 1.4, ease: "easeInOut" },
            },
          }}
        >
          <path d="M12 10.189V14" />
          <path d="M12 2v3" />
          <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
          <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
        </motion.g>
        <motion.path
          d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
          variants={{
            rest: { x: 0 },
            sail: {
              x: [0, -3, 0, -2, 0],
              transition: { duration: 1.4, ease: "easeInOut" },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}
