import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Feather({
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
        style={{ originX: "17px", originY: "5px" }}
        initial="rest"
        whileHover={reduced ? undefined : "drift"}
        variants={{
          rest: { rotate: 0, y: 0 },
          drift: { rotate: [0, -6, 0], y: [0, 1, 0], transition: { duration: 0.7, ease: "easeInOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M14.086 18.412A2 2 0 0 1 12.67 19H5v-7.672a2 2 0 0 1 .586-1.414L11.75 3.75a6 6 0 1 1 8.49 8.49z"
        />
        <path d="M16 8 2 22" />
        <path d="M17.488 15H9" />
      </motion.g>
    </svg>
  );
}
