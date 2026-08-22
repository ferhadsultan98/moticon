import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Book({
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
      <motion.path
        fill="transparent"
        style={{ originX: "6.5px", originY: "12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "flip"}
        variants={{
          rest: { scaleX: 1, skewY: 0 },
          flip: { scaleX: [1, 0.92, 1], skewY: [0, 1.5, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      />
    </svg>
  );
}
