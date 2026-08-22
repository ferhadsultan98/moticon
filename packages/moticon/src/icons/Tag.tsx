import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Tag({
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
      <motion.g
        style={{ originX: "4px", originY: "3px" }}
        initial="rest"
        whileHover={reduced ? undefined : "swing"}
        variants={{
          rest: { rotate: 0 },
          swing: { rotate: [0, 10, -6, 3, 0], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
        />
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      </motion.g>
    </svg>
  );
}
