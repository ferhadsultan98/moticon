import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Trophy({
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
        style={{ originX: "12px", originY: "22px" }}
        initial="rest"
        whileHover={reduced ? undefined : "raise"}
        variants={{
          rest: { y: 0, scale: 1 },
          raise: { y: -2, scale: 1.05, transition: { duration: 0.3, ease: "backOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
        <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
        <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
        <path d="M4 22h16" />
        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
        <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
      </motion.g>
    </svg>
  );
}
