import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function MailOpen({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "peek"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
        />
        <motion.path
          style={{ originX: "12px", originY: "10px" }}
          variants={{
            rest: { y: 0 },
            peek: { y: -2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
        />
      </motion.g>
    </svg>
  );
}
