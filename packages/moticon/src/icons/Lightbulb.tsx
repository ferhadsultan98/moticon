import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Lightbulb({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "light"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { fill: "rgba(0,0,0,0)" },
            light: { fill: ["rgba(0,0,0,0)", "currentColor"], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
        />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </motion.g>
    </svg>
  );
}
