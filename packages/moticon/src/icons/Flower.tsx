import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Flower({
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
        style={{ originX: "12px", originY: "12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "bloom"}
        variants={{
          rest: { scale: 1 },
          bloom: { scale: 1.15, transition: { duration: 0.6, ease: "backOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
        <path d="M12 7.5V9" />
        <path d="M7.5 12H9" />
        <path d="M16.5 12H15" />
        <path d="M12 16.5V15" />
        <path d="m8 8 1.88 1.88" />
        <path d="M14.12 9.88 16 8" />
        <path d="m8 16 1.88-1.88" />
        <path d="M14.12 14.12 16 16" />
      </motion.g>
    </svg>
  );
}
