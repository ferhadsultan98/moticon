import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function CloudDrizzle({
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
      <motion.g initial="rest" whileHover={reduced ? undefined : "drizzle"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drizzle: { y: [0, 2], opacity: [1, 0.3], transition: { duration: 0.4, ease: "easeIn", delay: 0 } },
          }}
          d="M8 14v1"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drizzle: { y: [0, 2], opacity: [1, 0.3], transition: { duration: 0.4, ease: "easeIn", delay: 0.1 } },
          }}
          d="M8 19v1"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drizzle: { y: [0, 2], opacity: [1, 0.3], transition: { duration: 0.4, ease: "easeIn", delay: 0.05 } },
          }}
          d="M12 16v1"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drizzle: { y: [0, 2], opacity: [1, 0.3], transition: { duration: 0.4, ease: "easeIn", delay: 0.15 } },
          }}
          d="M12 21v1"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drizzle: { y: [0, 2], opacity: [1, 0.3], transition: { duration: 0.4, ease: "easeIn", delay: 0.02 } },
          }}
          d="M16 14v1"
        />
        <motion.path
          variants={{
            rest: { y: 0, opacity: 1 },
            drizzle: { y: [0, 2], opacity: [1, 0.3], transition: { duration: 0.4, ease: "easeIn", delay: 0.12 } },
          }}
          d="M16 19v1"
        />
      </motion.g>
    </svg>
  );
}
