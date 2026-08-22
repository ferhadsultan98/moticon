import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BellOff({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "silence"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
        <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            silence: { pathLength: [0, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m2 2 20 20"
        />
      </motion.g>
    </svg>
  );
}
