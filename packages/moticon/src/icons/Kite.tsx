"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Kite({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "fly"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "11px", originY: "20px" }}
          variants={{
            rest: { rotate: 0 },
            fly: {
              rotate: [0, 8, -6, 4, -2, 0],
              transition: { duration: 1, ease: "easeInOut" },
            },
          }}
        >
          <path d="M4 10 10 4 20 8 14 14 z" transform="translate(0 -1)" />
          <path d="M4 9 20 7" transform="translate(0 -1)" />
          <path d="M10 3 14 13" transform="translate(0 -1)" />
          <motion.path
            d="M12 12c0 3-2 4-2 6s2 2 2 4"
            fill="transparent"
            variants={{
              rest: { d: "M12 12c0 3-2 4-2 6s2 2 2 4" },
              fly: {
                d: [
                  "M12 12c0 3-2 4-2 6s2 2 2 4",
                  "M12 12c0 3 2 4 2 6s-2 2-2 4",
                  "M12 12c0 3-2 4-2 6s2 2 2 4",
                ],
                transition: { duration: 1, ease: "easeInOut", repeat: 1 },
              },
            }}
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}
