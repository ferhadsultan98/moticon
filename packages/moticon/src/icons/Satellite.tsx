"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Satellite({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "transmit"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M9 21a6 6 0 0 0-6-6" />
        <path
          fill="transparent"
          d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"
        />
        <motion.path
          style={{ originX: "13px", originY: "6px" }}
          variants={{
            rest: { rotate: 0 },
            transmit: { rotate: -8, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            transmit: { opacity: [1, 0.2, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M16.5 7.5 19 5"
        />
        <motion.path
          style={{ originX: "14px", originY: "17px" }}
          variants={{
            rest: { rotate: 0 },
            transmit: { rotate: 8, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"
        />
      </motion.g>
    </svg>
  );
}