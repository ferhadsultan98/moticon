import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Kanban({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "progress"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M5 3v14" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            progress: { pathLength: [0.3, 1], transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="M12 3v8"
        />
        <path d="M19 3v18" />
      </motion.g>
    </svg>
  );
}
