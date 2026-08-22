import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Binoculars({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "focus"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
        <path
          fill="transparent"
          d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
        />
        <path d="M 22 16 L 2 16" />
        <path
          fill="transparent"
          d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
        />
        <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
        <motion.path
          style={{ originX: "12px", originY: "10px" }}
          variants={{
            rest: { scaleX: 1 },
            focus: { scaleX: [1, 1.8, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M10 10h4"
        />
      </motion.g>
    </svg>
  );
}
