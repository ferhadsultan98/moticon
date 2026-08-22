import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Gift({
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
      <motion.g initial="rest" whileTap={reduced ? undefined : "unwrap"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
        <path d="M12 7v14" />
        <motion.path
          style={{ originX: "12px", originY: "7px" }}
          variants={{
            rest: { y: 0, scaleY: 1 },
            unwrap: { y: -2, scaleY: 1.1, transition: { duration: 0.3, ease: "backOut" } },
          }}
          d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"
        />
        <rect x="3" y="7" width="18" height="4" rx="1" />
      </motion.g>
    </svg>
  );
}
