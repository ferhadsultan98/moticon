import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Database({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "sync"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.ellipse
          style={{ originX: "12px", originY: "5px" }}
          variants={{
            rest: { scaleX: 1 },
            sync: { scaleX: [1, 0.85, 1], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          cx="12"
          cy="5"
          rx="9"
          ry="3"
        />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </motion.g>
    </svg>
  );
}
