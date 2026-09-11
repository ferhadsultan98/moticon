"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type VolumeState = "on" | "muted";

type Props = MoticonIconProps & {
  /** Controlled morph. When set, the icon holds this shape; hover/tap/force are ignored. */
  state?: VolumeState;
  /** Internal replay hook used by the catalog playground (uncontrolled only). */
  force?: boolean;
};

/**
 * Speaker with sound waves. Two modes:
 *  - uncontrolled: the original waves-pulse "play" hover animation
 *  - controlled (`state` set): morphs to and *stays* at "on" (waves) or
 *    "muted" (waves retract, an X crosses out)
 *
 * The speaker body is static. Waves and the mute X are always in the DOM; only
 * their opacity/scale/pathLength change.
 */
export function Volume2({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  state,
  force = false,
  ...props
}: Props) {
  const reduced = useReducedMotion();
  const controlled = state !== undefined;

  const animate = controlled
    ? state === "muted"
      ? "muted"
      : "on"
    : force && !reduced
      ? "play"
      : "rest";

  const t = reduced
    ? { duration: 0 }
    : { duration: 0.24, ease: [0.4, 0, 0.2, 1] as const };

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
        initial={controlled ? (state === "muted" ? "muted" : "on") : "rest"}
        animate={animate}
        whileHover={controlled || reduced ? undefined : "play"}
        whileTap={controlled || reduced ? undefined : "play"}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path
          fill="transparent"
          d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        />

        <motion.path
          d="M16 9a5 5 0 0 1 0 6"
          style={{ originX: "16px", originY: "12px" }}
          variants={{
            rest: { opacity: 1, scale: 1 },
            on: { opacity: 1, scale: 1, transition: t },
            muted: { opacity: 0, scale: 0.6, transition: t },
            play: {
              opacity: [1, 0.3, 1],
              transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
            },
          }}
        />
        <motion.path
          d="M19.364 18.364a9 9 0 0 0 0-12.728"
          style={{ originX: "19px", originY: "12px" }}
          variants={{
            rest: { opacity: 1, scale: 1 },
            on: { opacity: 1, scale: 1, transition: t },
            muted: { opacity: 0, scale: 0.6, transition: t },
            play: {
              opacity: [1, 0.3, 1],
              transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 },
            },
          }}
        />

        <motion.line
          x1="22"
          x2="16"
          y1="9"
          y2="15"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            on: { pathLength: 0, opacity: 0, transition: t },
            muted: { pathLength: 1, opacity: 1, transition: { ...t, duration: reduced ? 0 : 0.2 } },
            play: { pathLength: 0, opacity: 0 },
          }}
        />
        <motion.line
          x1="16"
          x2="22"
          y1="9"
          y2="15"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            on: { pathLength: 0, opacity: 0, transition: t },
            muted: {
              pathLength: 1,
              opacity: 1,
              transition: { ...t, duration: reduced ? 0 : 0.2, delay: reduced ? 0 : 0.08 },
            },
            play: { pathLength: 0, opacity: 0 },
          }}
        />
      </motion.g>
    </svg>
  );
}
