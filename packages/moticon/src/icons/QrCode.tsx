import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function QrCode({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "scan"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <rect width="5" height="5" x="3" y="3" rx="1" />
        <rect width="5" height="5" x="16" y="3" rx="1" />
        <rect width="5" height="5" x="3" y="16" rx="1" />
        <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
        <path d="M21 21v.01" />
        <path d="M12 7v3a2 2 0 0 1-2 2H7" />
        <path d="M3 12h.01" />
        <path d="M12 3h.01" />
        <path d="M12 16v.01" />
        <path d="M16 12h1" />
        <path d="M21 12v.01" />
        <path d="M12 21v-1" />
        <motion.line
          variants={{
            rest: { y1: 3, y2: 3, opacity: 0 },
            scan: {
              y1: [3, 21],
              y2: [3, 21],
              opacity: [0, 1, 0],
              transition: { duration: 0.7, ease: "linear" },
            },
          }}
          x1="2"
          x2="22"
          y1="3"
          y2="3"
          strokeWidth={1}
        />
      </motion.g>
    </svg>
  );
}
