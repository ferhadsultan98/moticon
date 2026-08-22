import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function PiggyBank({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "drop"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
        />
        <path d="M2 8v1a2 2 0 0 0 2 2h1" />
        <motion.circle
          fill="currentColor"
          stroke="none"
          variants={{
            rest: { cy: 3, opacity: 0 },
            drop: { cy: [3, 10], opacity: [1, 0], transition: { duration: 0.35, ease: "easeIn" } },
          }}
          cx="16"
          cy="3"
          r="1"
        />
      </motion.g>
    </svg>
  );
}
