import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Stethoscope({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "listen"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M11 2v2" />
        <path d="M5 2v2" />
        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
        <path d="M8 15a6 6 0 0 0 12 0v-3" />
        <motion.circle
          style={{ originX: "20px", originY: "10px" }}
          variants={{
            rest: { scale: 1 },
            listen: { scale: [1, 1.3, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          cx="20"
          cy="10"
          r="2"
        />
      </motion.g>
    </svg>
  );
}
