import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Filter({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "sift"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          fill="transparent"
          variants={{
            rest: { y: 0, scaleY: 1 },
            sift: { y: [0, -1, 0], scaleY: [1, 1.06, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          style={{ originX: "12px", originY: "3px" }}
          d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
        />
      </motion.g>
    </svg>
  );
}
