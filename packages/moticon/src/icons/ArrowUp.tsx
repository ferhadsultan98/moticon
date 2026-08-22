import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ArrowUp({
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
        initial="rest"
        whileHover={reduced ? undefined : "slide"}
        variants={{
          rest: { y: 0 },
          slide: { y: -3, transition: { duration: 0.25, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </motion.g>
    </svg>
  );
}
