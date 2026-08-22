import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ToggleLeft({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "switch"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="20" height="14" x="2" y="5" rx="7" />
        <motion.circle
          variants={{
            rest: { cx: 9 },
            switch: { cx: [9, 15, 9], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          cx="9"
          cy="12"
          r="3"
        />
      </motion.g>
    </svg>
  );
}
