"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

export function Search({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  force = false,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "scan";

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

        {/* Unified magnifying glass: deliberate search trajectory -> snap stop */}
        <motion.g
          style={{ originX: "11px", originY: "11px" }}
          variants={{
            rest: { x: 0, y: 0, rotate: 0 },
            scan: {
              x: [0, -1.8, 1.2, 0, 0, 0],
              y: [0, -1.2, 0.8, 0, 0, 0],
              rotate: [0, -3.2, 2.4, 0, 0, 0],
              transition: {
                duration: 0.82,
                times: [0, 0.16, 0.32, 0.42, 0.72, 1],
                ease: "easeInOut",
              },
            },
          }}
        >
          {/* Lens: optical focus bulge upon finding target */}
          <motion.circle
            cx="11"
            cy="11"
            r="8"
            style={{ originX: "11px", originY: "11px" }}
            variants={{
              rest: { scale: 1 },
              scan: {
                scale: [1, 1, 1, 1.15, 0.98, 1],
                transition: {
                  duration: 0.82,
                  times: [0, 0.16, 0.38, 0.52, 0.72, 1],
                  ease: "easeInOut",
                },
              },
            }}
          />

          {/* Handle */}
          <path d="m21 21-4.34-4.34" />

          {/* Target found reticle ticks inside lens */}
          <motion.path
            d="M11 7.2v1.5M11 13.3v1.5M7.2 11h1.5M13.3 11h1.5"
            strokeWidth={strokeWidth * 0.75}
            variants={{
              rest: { opacity: 0, pathLength: 0 },
              scan: {
                opacity: [0, 0, 0.85, 0.85, 0],
                pathLength: [0, 0, 1, 1, 0],
                transition: {
                  duration: 0.82,
                  times: [0, 0.4, 0.52, 0.68, 1],
                  ease: "easeOut",
                },
              },
            }}
          />

          {/* Center target found pulse dot */}
          <motion.circle
            cx="11"
            cy="11"
            r="1.6"
            fill="currentColor"
            stroke="none"
            style={{ originX: "11px", originY: "11px" }}
            variants={{
              rest: { opacity: 0, scale: 0.4 },
              scan: {
                opacity: [0, 0, 0.95, 0.95, 0],
                scale: [0.4, 0.4, 1.25, 1, 0.5],
                transition: {
                  duration: 0.82,
                  times: [0, 0.38, 0.5, 0.66, 1],
                  ease: "easeOut",
                },
              },
            }}
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}
