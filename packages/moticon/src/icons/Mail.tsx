import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Mail({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "flap"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <motion.path
          style={{ originX: "12px", originY: "7px" }}
          variants={{
            rest: { scaleY: 1, y: 0 },
            flap: {
              scaleY: [1, -0.5, 1],
              y: [0, -2, 0],
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
          d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        />
      </motion.g>
    </svg>
  );
}
