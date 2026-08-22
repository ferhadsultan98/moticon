import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Eye({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "blink"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { scaleY: 1 },
            blink: {
              scaleY: [1, 0, 1],
              transition: { duration: 0.3, times: [0, 0.5, 1], ease: "easeInOut" },
            },
          }}
          d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
        />
        <motion.circle
          variants={{
            rest: { opacity: 1, scale: 1 },
            blink: {
              opacity: [1, 0, 1],
              scale: [1, 0.3, 1],
              transition: { duration: 0.3, times: [0, 0.5, 1], ease: "easeInOut" },
            },
          }}
          cx="12"
          cy="12"
          r="3"
        />
      </motion.g>
    </svg>
  );
}
