import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function UserMinus({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "remove"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <motion.line
          style={{ originX: "19px", originY: "11px" }}
          variants={{
            rest: { scaleX: 1 },
            remove: { scaleX: [1, 0.5, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          x1="22"
          x2="16"
          y1="11"
          y2="11"
        />
      </motion.g>
    </svg>
  );
}
