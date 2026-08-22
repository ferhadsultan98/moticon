import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function IceCreamCone({
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
        <path d="M17 7A5 5 0 0 0 7 7" />
        <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
        <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
        <motion.circle
          fill="currentColor"
          stroke="none"
          variants={{
            rest: { cy: 12, opacity: 0 },
            drip: { cy: [12, 18], opacity: [1, 0], transition: { duration: 0.6, ease: "easeIn" } },
          }}
          cx="12"
          cy="12"
          r="1"
        />
      </motion.g>
    </svg>
  );
}
