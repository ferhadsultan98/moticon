import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Plus({
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
        style={{ originX: "12px", originY: "12px" }}
        initial="rest"
        whileTap={reduced ? undefined : "pop"}
        variants={{
          rest: { scale: 1 },
          pop: { scale: [1, 1.3, 1], transition: { duration: 0.25, ease: "backOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </motion.g>
    </svg>
  );
}
