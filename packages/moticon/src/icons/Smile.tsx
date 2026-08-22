import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Smile({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "grin"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <path d="M15 10V9" />
        <path d="M9 10V9" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scaleX: 1, y: 0 },
            grin: { scaleX: 1.2, y: 0.5, transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="M16.472 15a6 6 0 01-8.943 0"
        />
      </motion.g>
    </svg>
  );
}
