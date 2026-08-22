import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Volume1({
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
        style={{ originX: "7px", originY: "12px" }}
        initial="rest"
        whileTap={reduced ? undefined : "hum"}
        variants={{
          rest: { scaleX: 1 },
          hum: { scaleX: [1, 0.9, 1], transition: { duration: 0.3, ease: "easeInOut" } },
        }}
        d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      />
    </svg>
  );
}
