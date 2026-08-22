import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Download({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "bounce"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "12px", originY: "9px" }}
          variants={{
            rest: { y: 0 },
            bounce: { y: [0, 3, -2, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
        >
          <path d="M12 15V3" />
          <path d="m7 10 5 5 5-5" />
        </motion.g>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      </motion.g>
    </svg>
  );
}
