"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "./types";

export function Plane({
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
        fill="transparent"
        style={{ originX: "12px", originY: "12px" }}
        initial="rest"
        whileHover={reduced ? undefined : "fly"}
        variants={{
          rest: { x: 0, y: 0, rotate: 0 },
          fly: {
            // smooth glide: ease up along the flight path, hold, ease back
            x: [0, 6, 6, 0],
            y: [0, -6, -6, 0],
            rotate: [0, 5, 5, 0],
            transition: {
              duration: 1.1,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.45, 0.6, 1],
            },
          },
        }}
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
      />
    </svg>
  );
}
