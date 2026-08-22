import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Tent({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "pitch"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2 21h20" />
        <motion.path
          style={{ originX: "14px", originY: "3px" }}
          variants={{
            rest: { rotate: 0 },
            pitch: { rotate: -3, transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="M3.5 21 14 3"
        />
        <motion.path
          style={{ originX: "10px", originY: "3px" }}
          variants={{
            rest: { rotate: 0 },
            pitch: { rotate: 3, transition: { duration: 0.35, ease: "easeOut" } },
          }}
          d="M20.5 21 10 3"
        />
        <path d="M15.5 21 12 15l-3.5 6" />
      </motion.g>
    </svg>
  );
}
