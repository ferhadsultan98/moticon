"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

export function DoorOpen({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  force = false,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "open";

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
      <motion.g
        initial="rest"
        animate={force && active ? active : "rest"}
        whileHover={active}
        whileTap={active}
      >
        <rect width="24" height="24" fill="transparent" stroke="none" />

        {/* Static door frame and floor threshold */}
        <path d="M11 20H2" />
        <path d="M11 4H8a2 2 0 0 0-2 2v14" />
        <path d="M22 20h-3" />

        {/* Interior ambient light spilling through the opening doorway */}
        <motion.polygon
          points="11,5.5 18,7 18,19 11,19.5"
          fill="currentColor"
          stroke="none"
          style={{ originX: "11px", originY: "12px" }}
          variants={{
            rest: { opacity: 0, scaleX: 0.4 },
            open: {
              opacity: [0, 0, 0.18, 0.18, 0],
              scaleX: [0.4, 0.4, 1.05, 1.05, 0.4],
              transition: {
                duration: 0.84,
                times: [0, 0.18, 0.42, 0.65, 1],
                ease: "easeInOut",
              },
            },
          }}
        />

        {/* Interior light ray accents */}
        <motion.path
          d="M11 9l6.5 1.5M11 15l6.5 1.5"
          strokeWidth={strokeWidth * 0.8}
          variants={{
            rest: { opacity: 0, pathLength: 0 },
            open: {
              opacity: [0, 0, 0.65, 0.65, 0],
              pathLength: [0, 0, 1, 1, 0],
              transition: {
                duration: 0.84,
                times: [0, 0.22, 0.44, 0.64, 1],
                ease: "easeOut",
              },
            },
          }}
        />

        {/* Swinging door panel & handle: pivots from real hinge at x=11 */}
        <motion.g
          style={{ originX: "11px", originY: "12px" }}
          variants={{
            rest: { scaleX: 1, skewY: 0, x: 0 },
            open: {
              scaleX: [1, 1, 0.32, 0.32, 1],
              skewY: [0, 0, -2.8, -2.8, 0],
              x: [0, 0, 0.4, 0.4, 0],
              transition: {
                duration: 0.84,
                times: [0, 0.18, 0.44, 0.66, 1],
                ease: [0.4, 0, 0.2, 1],
              },
            },
          }}
        >
          {/* Open door panel */}
          <path
            fill="transparent"
            d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"
          />

          {/* Door handle with tactile latch depress anticipation */}
          <motion.path
            d="M14 12h.01"
            variants={{
              rest: { y: 0 },
              open: {
                y: [0, 1.4, 0, 0, 0],
                transition: {
                  duration: 0.84,
                  times: [0, 0.08, 0.18, 0.6, 1],
                  ease: "easeInOut",
                },
              },
            }}
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}
