import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function FlameKindling({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "flicker"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m5 22 14-4" />
        <path d="m5 18 14 4" />
        <motion.path
          style={{ originX: "12px", originY: "10px" }}
          fill="transparent"
          variants={{
            rest: { scaleY: 1, scaleX: 1 },
            flicker: {
              scaleY: [1, 1.07, 0.97, 1],
              scaleX: [1, 0.95, 1.02, 1],
              transition: { duration: 0.6, ease: "easeInOut" },
            },
          }}
          d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
        />
      </motion.g>
    </svg>
  );
}
