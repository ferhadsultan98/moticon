"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

export function CreditCard({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  force = false,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "tap";

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
      <motion.g
        initial="rest"
        animate={force && active ? active : "rest"}
        whileHover={active}
        whileTap={active}
      >
        <rect width="24" height="24" fill="transparent" stroke="none" />

        {/* NFC Contactless Waves: emit upon tap impact */}
        <motion.path
          d="M16 2.6a3.6 3.6 0 0 1 2.6 1.6"
          variants={{
            rest: { opacity: 0, pathLength: 0 },
            tap: {
              opacity: [0, 0, 0.9, 0],
              pathLength: [0, 0, 1, 1],
              transition: { duration: 0.82, times: [0, 0.25, 0.44, 0.72], ease: "easeOut" },
            },
          }}
        />
        <motion.path
          d="M18.2 1.2a6.4 6.4 0 0 1 4.2 2.4"
          variants={{
            rest: { opacity: 0, pathLength: 0 },
            tap: {
              opacity: [0, 0, 0.85, 0],
              pathLength: [0, 0, 1, 1],
              transition: { duration: 0.82, times: [0, 0.3, 0.5, 0.76], ease: "easeOut" },
            },
          }}
        />

        {/* Card Body + Stripe group: anticipation -> tap -> confirmation -> settle */}
        <motion.g
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { y: 0, rotate: 0, scale: 1 },
            tap: {
              y: [0, -2.2, 1.4, 1.4, -0.3, 0],
              rotate: [0, -3.2, 0, 0, 0.6, 0],
              scale: [1, 1.025, 0.98, 0.98, 1.01, 1],
              transition: {
                duration: 0.82,
                times: [0, 0.16, 0.32, 0.54, 0.74, 1],
                ease: "easeInOut",
              },
            },
          }}
        >
          {/* Card outline */}
          <rect width="20" height="14" x="2" y="5" rx="2" />

          {/* Magnetic stripe with subtle shimmer pulse on confirmation */}
          <motion.line
            x1="2"
            x2="22"
            y1="10"
            y2="10"
            style={{ originX: "12px", originY: "10px" }}
            variants={{
              rest: { opacity: 1, scaleX: 1 },
              tap: {
                opacity: [1, 1, 0.7, 1, 1],
                scaleX: [1, 1, 0.95, 1.02, 1],
                transition: { duration: 0.82, times: [0, 0.28, 0.44, 0.6, 1], ease: "easeInOut" },
              },
            }}
          />

          {/* Contactless confirmation check pulse in card corner */}
          <motion.path
            d="M5.5 14.5l1.2 1.2 2.3-2.3"
            strokeWidth={1.8}
            variants={{
              rest: { opacity: 0, pathLength: 0 },
              tap: {
                opacity: [0, 0, 0.95, 0.95, 0],
                pathLength: [0, 0, 1, 1, 1],
                transition: { duration: 0.82, times: [0, 0.34, 0.48, 0.68, 0.82], ease: "easeOut" },
              },
            }}
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}
