import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Hourglass({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "pour"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M5 22h14" />
        <path d="M5 2h14" />
        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
        <motion.path
          style={{ originX: "12px", originY: "8px" }}
          fill="currentColor"
          stroke="none"
          variants={{
            rest: { scaleY: 1, opacity: 0.6 },
            pour: { scaleY: [1, 0], opacity: [0.6, 0], transition: { duration: 0.5, ease: "easeIn" } },
          }}
          d="M8.5 3h7l-3.5 4z"
        />
        <motion.path
          style={{ originX: "12px", originY: "20px" }}
          fill="currentColor"
          stroke="none"
          variants={{
            rest: { scaleY: 0, opacity: 0 },
            pour: { scaleY: [0, 1], opacity: [0, 0.6], transition: { duration: 0.5, ease: "easeOut", delay: 0.15 } },
          }}
          d="M8.5 21h7l-3.5 -4z"
        />
      </motion.g>
    </svg>
  );
}
