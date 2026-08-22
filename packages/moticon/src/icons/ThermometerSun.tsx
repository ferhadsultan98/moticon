import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ThermometerSun({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "rise"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 2v2" />
        <path d="M12 8a4 4 0 0 0-1.645 7.647" />
        <path d="M2 12h2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m6.34 17.66-1.41 1.41" />
        <motion.path
          style={{ originX: "20px", originY: "20px" }}
          variants={{
            rest: { scaleY: 1 },
            rise: { scaleY: [0.85, 1], transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"
        />
      </motion.g>
    </svg>
  );
}
