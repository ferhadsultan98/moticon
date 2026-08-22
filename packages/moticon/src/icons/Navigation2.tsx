import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Navigation2({
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
      <motion.polygon
        style={{ originX: "12px", originY: "12px" }}
        initial="rest"
        whileTap={reduced ? undefined : "spin"}
        variants={{
          rest: { rotate: 0 },
          spin: { rotate: 180, transition: { duration: 0.4, ease: "easeInOut" } },
        }}
        points="12 2 19 21 12 17 5 21 12 2"
      />
    </svg>
  );
}
