import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function PoundSterling({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "cash"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10 7v14" />
        <path d="M6 21h12" />
        <path d="M6 13h10" />
        <motion.path
          variants={{
            rest: { scale: 1 },
            cash: { scale: [1, 1.1, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          style={{ originX: "14px", originY: "7px" }}
          d="M18 7c0-5.333-8-5.333-8 0"
        />
      </motion.g>
    </svg>
  );
}
