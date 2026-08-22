import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Plug({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "plugin"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M15 8V2" />
        <path
          fill="transparent"
          d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"
        />
        <path d="M9 8V2" />
        <motion.path
          variants={{
            rest: { y: 0 },
            plugin: { y: 2, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M12 22v-5"
        />
      </motion.g>
    </svg>
  );
}
