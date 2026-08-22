import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Utensils({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "pickup"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.g
          style={{ originX: "7px", originY: "22px" }}
          variants={{
            rest: { rotate: 0 },
            pickup: { rotate: -4, transition: { duration: 0.4, ease: "easeOut" } },
          }}
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
        </motion.g>
        <motion.path
          style={{ originX: "21px", originY: "22px" }}
          variants={{
            rest: { rotate: 0 },
            pickup: { rotate: 4, transition: { duration: 0.4, ease: "easeOut" } },
          }}
          d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
        />
      </motion.g>
    </svg>
  );
}
