import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Citrus({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "zest"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
        />
        <path d="m14 10-5.5 5.5" />
        <path d="M14 17.85V10H6.15" />
        <motion.path
          style={{ originX: "19px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            zest: { rotate: [0, 15, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M19.65 15.66A8 8 0 0 1 8.35 4.34"
        />
      </motion.g>
    </svg>
  );
}
