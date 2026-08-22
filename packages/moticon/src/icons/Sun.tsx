import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Sun({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "shine"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="4" />
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0, scale: 1 },
            shine: { rotate: 40, scale: 1.15, transition: { duration: 0.5, ease: "easeInOut" } },
          }}
        >
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </motion.g>
      </motion.g>
    </svg>
  );
}
