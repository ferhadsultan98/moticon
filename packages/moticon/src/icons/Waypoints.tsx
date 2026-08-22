import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Waypoints({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "ping"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m10.586 5.414-5.172 5.172" />
        <path d="m18.586 13.414-5.172 5.172" />
        <path d="M6 12h12" />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ping: { scale: [1, 1.4, 1], transition: { duration: 0.25, delay: 0 } },
          }}
          cx="12"
          cy="20"
          r="2"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ping: { scale: [1, 1.4, 1], transition: { duration: 0.25, delay: 0.08 } },
          }}
          cx="20"
          cy="12"
          r="2"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ping: { scale: [1, 1.4, 1], transition: { duration: 0.25, delay: 0.16 } },
          }}
          cx="12"
          cy="4"
          r="2"
        />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            ping: { scale: [1, 1.4, 1], transition: { duration: 0.25, delay: 0.24 } },
          }}
          cx="4"
          cy="12"
          r="2"
        />
      </motion.g>
    </svg>
  );
}
