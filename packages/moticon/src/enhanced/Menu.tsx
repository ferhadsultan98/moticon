"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type MenuState = "menu" | "close";

type Props = MoticonIconProps & {
  /** Controlled morph. When set, the icon holds this shape; hover/tap/force are ignored. */
  state?: MenuState;
  /** Internal replay hook used by the catalog playground (uncontrolled only). */
  force?: boolean;
};

/**
 * Three bars that fold into an X. Two modes:
 *  - uncontrolled: plays the fold-and-return "toggle" animation on hover/tap/force
 *  - controlled (`state` set): morphs to and *stays* at "menu" or "close"
 */
export function Menu({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  state,
  force = false,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const controlled = state !== undefined;

  // In controlled mode the target variant is the end state, held indefinitely.
  // In uncontrolled mode we keep the original round-trip "toggle" keyframes.
  const animate = controlled
    ? state === "close"
      ? "close"
      : "menu"
    : force && !reduced
      ? "toggle"
      : "rest";

  const transition = reduced
    ? { duration: 0 }
    : controlled
      ? { duration: 0.34, ease: [0.4, 0, 0.2, 1] as const }
      : undefined;

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
        initial={controlled ? (state === "close" ? "close" : "menu") : "rest"}
        animate={animate}
        whileHover={controlled || reduced ? undefined : "toggle"}
        whileTap={controlled || reduced ? undefined : "toggle"}
      >
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          d="M4 5h16"
          style={{ originX: "12px", originY: "5px" }}
          variants={{
            rest: { rotate: 0, y: 0, scaleX: 1 },
            menu: { rotate: 0, y: 0, scaleX: 1, transition },
            close: { rotate: 45, y: 7, scaleX: 1, transition },
            toggle: {
              rotate: [0, 0, 45, 45, 0],
              y: [0, 1, 7, 7, 0],
              scaleX: [1, 0.9, 1, 1, 1],
              transition: { duration: 0.76, times: [0, 0.14, 0.4, 0.68, 1], ease: "easeInOut" },
            },
          }}
        />
        <motion.path
          d="M4 12h16"
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { opacity: 1, scaleX: 1 },
            menu: { opacity: 1, scaleX: 1, transition },
            close: { opacity: 0, scaleX: 0.15, transition },
            toggle: {
              opacity: [1, 1, 0, 0, 1],
              scaleX: [1, 0.72, 0.15, 0.15, 1],
              transition: { duration: 0.76, times: [0, 0.14, 0.32, 0.7, 1], ease: "easeInOut" },
            },
          }}
        />
        <motion.path
          d="M4 19h16"
          style={{ originX: "12px", originY: "19px" }}
          variants={{
            rest: { rotate: 0, y: 0, scaleX: 1 },
            menu: { rotate: 0, y: 0, scaleX: 1, transition },
            close: { rotate: -45, y: -7, scaleX: 1, transition },
            toggle: {
              rotate: [0, 0, -45, -45, 0],
              y: [0, -1, -7, -7, 0],
              scaleX: [1, 0.9, 1, 1, 1],
              transition: { duration: 0.76, times: [0, 0.14, 0.4, 0.68, 1], ease: "easeInOut" },
            },
          }}
        />
      </motion.g>
    </svg>
  );
}
