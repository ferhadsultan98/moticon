import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ClipboardCopy({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "paste"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        <path d="M16 4h2a2 2 0 0 1 2 2v4" />
        <path d="M21 14H11" />
        <motion.path
          variants={{
            rest: { x: 0 },
            paste: { x: [-2, 0], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="m15 10-4 4 4 4"
        />
      </motion.g>
    </svg>
  );
}
