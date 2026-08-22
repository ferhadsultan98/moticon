import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Mic({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "speak"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 19v3" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <motion.rect
          style={{ originX: "12px", originY: "8.5px" }}
          variants={{
            rest: { scaleY: 1 },
            speak: {
              scaleY: [1, 1.08, 0.95, 1.05, 1],
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          x="9"
          y="2"
          width="6"
          height="13"
          rx="3"
        />
      </motion.g>
    </svg>
  );
}
