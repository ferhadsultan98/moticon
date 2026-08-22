import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BadgeCheck({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "verify"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            verify: { rotate: 45, transition: { duration: 0.35, ease: "easeOut" } },
          }}
          fill="transparent"
          d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
        />
        <path d="m9 12 2 2 4-4" />
      </motion.g>
    </svg>
  );
}
