import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function DoorOpen({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "swing"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M11 20H2" />
        <path d="M11 4H8a2 2 0 0 0-2 2v14" />
        <path d="M22 20h-3" />
        <motion.g
          style={{ originX: "11px", originY: "4px" }}
          variants={{
            rest: { scaleX: 1 },
            swing: { scaleX: [1, 0.35, 1], transition: { duration: 0.7, ease: "easeInOut" } },
          }}
        >
          <path
            fill="transparent"
            d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"
          />
          <path d="M14 12h.01" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
