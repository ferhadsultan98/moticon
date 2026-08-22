import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Bandage({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "peel"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 6v12" />
        <motion.path
          style={{ originX: "18px", originY: "6px" }}
          variants={{
            rest: { rotate: 0 },
            peel: { rotate: -8, transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="M18 6v12"
        />
        <path d="M10 10.01h.01" />
        <path d="M10 14.01h.01" />
        <path d="M14 10.01h.01" />
        <path d="M14 14.01h.01" />
      </motion.g>
    </svg>
  );
}
