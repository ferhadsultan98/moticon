import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Play({
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
      <motion.path
        fill="transparent"
        style={{ originX: "9px", originY: "12px" }}
        initial="rest"
        whileTap={reduced ? undefined : "play"}
        variants={{
          rest: { scale: 1 },
          play: { scale: [1, 0.85, 1.1, 1], transition: { duration: 0.35, ease: "easeOut" } },
        }}
        d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
      />
    </svg>
  );
}
