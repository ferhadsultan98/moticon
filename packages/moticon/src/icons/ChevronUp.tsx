import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ChevronUp({
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
        initial="rest"
        whileHover={reduced ? undefined : "rise"}
        variants={{
          rest: { y: 0 },
          rise: { y: -3, transition: { duration: 0.2, ease: "easeOut" } },
        }}
        d="m18 15-6-6-6 6"
      />
    </svg>
  );
}
