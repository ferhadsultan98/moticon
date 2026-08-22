import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Telescope({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "aim"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="m16 21-3.105-6.21" />
        <path d="m8 21 3.105-6.21" />
        <motion.g
          style={{ originX: "12px", originY: "13px" }}
          variants={{
            rest: { rotate: 0 },
            aim: { rotate: -10, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
          <path d="m13.56 11.747 4.332-.924" />
          <path
            fill="transparent"
            d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
          />
          <path d="m6.158 8.633 1.114 4.456" />
          <circle cx="12" cy="13" r="2" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
