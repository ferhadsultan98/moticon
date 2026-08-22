import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Network({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "send"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <motion.circle
          fill="currentColor"
          stroke="none"
          variants={{
            rest: { cx: 12, cy: 12, opacity: 0 },
            send: {
              cx: [12, 5, 12, 19, 12],
              cy: [12, 19, 12, 19, 12],
              opacity: [0, 1, 0, 1, 0],
              transition: { duration: 0.8, ease: "easeInOut" },
            },
          }}
          cx="12"
          cy="12"
          r="1.5"
        />
      </motion.g>
    </svg>
  );
}
