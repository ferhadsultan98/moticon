"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function CloudRain({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "drip"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drip: { y: [0, 4], opacity: [1, 0], transition: { duration: 0.5, ease: "easeIn", delay: 0 } },
          }}
          d="M8 14v6"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drip: { y: [0, 4], opacity: [1, 0], transition: { duration: 0.5, ease: "easeIn", delay: 0.15 } },
          }}
          d="M16 14v6"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drip: { y: [0, 4], opacity: [1, 0], transition: { duration: 0.5, ease: "easeIn", delay: 0.3 } },
          }}
          d="M12 16v6"
        />
      </motion.g>
    </svg>
  );
}