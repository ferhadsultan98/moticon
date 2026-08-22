import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Paperclip({
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
      <motion.path
        style={{ originX: "12px", originY: "12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "clip"}
        variants={{
          rest: { scale: 1 },
          clip: { scale: [1, 0.9, 1.05, 1], transition: { duration: 0.35, ease: "easeOut" } },
        }}
        d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
      />
    </svg>
  );
}
