import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Pizza({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "lift"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
        />
        <motion.g
          style={{ originX: "9px", originY: "12px" }}
          variants={{
            rest: { y: 0, x: 0 },
            lift: { y: -3, x: 1, transition: { duration: 0.3, ease: "backOut" } },
          }}
        >
          <path d="m12 14-1 1" />
          <path d="m13.75 18.25-1.25 1.42" />
          <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
          <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
