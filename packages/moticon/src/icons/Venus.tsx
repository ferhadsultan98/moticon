import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Venus({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "settle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M9 19h6" />
        <motion.path
          style={{ originX: "12px", originY: "15px" }}
          variants={{
            rest: { scaleY: 1 },
            settle: { scaleY: [0.6, 1], transition: { duration: 0.4, ease: "backOut" } },
          }}
          d="M12 15v7"
        />
        <circle cx="12" cy="9" r="6" />
      </motion.g>
    </svg>
  );
}
