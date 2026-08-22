import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function ShoppingCart({
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
      <motion.g
        initial="rest"
        whileHover={reduced ? undefined : "roll"}
        variants={{
          rest: { x: 0, rotate: 0 },
          roll: {
            x: [0, 2, 0, -2, 0],
            rotate: [0, 3, 0, -3, 0],
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "21px" }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
      </motion.g>
    </svg>
  );
}
