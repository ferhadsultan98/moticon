"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Recycle({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "loop"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m14 16-3 3 3 3" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            loop: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0 } },
          }}
          d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            loop: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.15 } },
          }}
          d="M8.293 13.596 7.196 9.5 3.1 10.598"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            loop: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.3 } },
          }}
          d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            loop: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.45 } },
          }}
          d="m13.378 9.633 4.096 1.098 1.097-4.096"
        />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            loop: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.6 } },
          }}
          d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
        />
      </motion.g>
    </svg>
  );
}