import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function VolumeX({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "mute"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        />
        <motion.line
          variants={{
            rest: { pathLength: 1 },
            mute: { pathLength: [0, 1], transition: { duration: 0.25, ease: "easeOut" } },
          }}
          x1="22"
          x2="16"
          y1="9"
          y2="15"
        />
        <motion.line
          variants={{
            rest: { pathLength: 1 },
            mute: { pathLength: [0, 1], transition: { duration: 0.25, ease: "easeOut", delay: 0.1 } },
          }}
          x1="16"
          x2="22"
          y1="9"
          y2="15"
        />
      </motion.g>
    </svg>
  );
}
