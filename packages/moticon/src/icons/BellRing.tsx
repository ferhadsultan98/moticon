import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function BellRing({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "ring"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <motion.g
          style={{ originX: "12px", originY: "4px" }}
          variants={{
            rest: { rotate: 0 },
            ring: { rotate: [0, -10, 8, -6, 0], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
        >
          <path
            fill="transparent"
            d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
          />
        </motion.g>
        <motion.path
          style={{ originX: "22px", originY: "8px" }}
          variants={{
            rest: { scale: 1 },
            ring: { scale: [1, 1.3, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M22 8c0-2.3-.8-4.3-2-6"
        />
        <motion.path
          style={{ originX: "2px", originY: "8px" }}
          variants={{
            rest: { scale: 1 },
            ring: { scale: [1, 1.3, 1], transition: { duration: 0.5, ease: "easeInOut" } },
          }}
          d="M4 2C2.8 3.7 2 5.7 2 8"
        />
      </motion.g>
    </svg>
  );
}
