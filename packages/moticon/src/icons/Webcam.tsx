import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Webcam({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "capture"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="10" r="8" />
        <motion.circle
          variants={{
            rest: { scale: 1 },
            capture: { scale: [1, 0.5, 1], transition: { duration: 0.25, ease: "easeOut" } },
          }}
          cx="12"
          cy="10"
          r="3"
        />
        <path d="M7 22h10" />
        <path d="M12 22v-4" />
      </motion.g>
    </svg>
  );
}
