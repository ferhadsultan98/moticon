import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Bug({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "scurry"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 20v-9" />
        <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
        <path d="M14.12 3.88 16 2" />
        <path d="m8 2 1.88 1.88" />
        <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
        <motion.path
          style={{ originX: "22px", originY: "5px" }}
          variants={{
            rest: { rotate: 0 },
            scurry: { rotate: [0, -10, 0], transition: { duration: 0.35, ease: "easeInOut", delay: 0 } },
          }}
          d="M21 5a4 4 0 0 1-3.55 3.97"
        />
        <motion.path
          style={{ originX: "22px", originY: "13px" }}
          variants={{
            rest: { rotate: 0 },
            scurry: { rotate: [0, 10, 0], transition: { duration: 0.35, ease: "easeInOut", delay: 0.08 } },
          }}
          d="M22 13h-4"
        />
        <motion.path
          style={{ originX: "17px", originY: "17px" }}
          variants={{
            rest: { rotate: 0 },
            scurry: { rotate: [0, -10, 0], transition: { duration: 0.35, ease: "easeInOut", delay: 0.16 } },
          }}
          d="M21 21a4 4 0 0 0-3.81-4"
        />
        <motion.path
          style={{ originX: "2px", originY: "5px" }}
          variants={{
            rest: { rotate: 0 },
            scurry: { rotate: [0, 10, 0], transition: { duration: 0.35, ease: "easeInOut", delay: 0 } },
          }}
          d="M3 5a4 4 0 0 0 3.55 3.97"
        />
        <motion.path
          style={{ originX: "2px", originY: "13px" }}
          variants={{
            rest: { rotate: 0 },
            scurry: { rotate: [0, -10, 0], transition: { duration: 0.35, ease: "easeInOut", delay: 0.08 } },
          }}
          d="M6 13H2"
        />
        <motion.path
          style={{ originX: "7px", originY: "17px" }}
          variants={{
            rest: { rotate: 0 },
            scurry: { rotate: [0, 10, 0], transition: { duration: 0.35, ease: "easeInOut", delay: 0.16 } },
          }}
          d="M3 21a4 4 0 0 1 3.81-4"
        />
      </motion.g>
    </svg>
  );
}
