"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type PlayState = "play" | "pause";

type Props = MoticonIconProps & {
  /** Controlled morph. When set, the icon holds this shape; hover/tap/force are ignored. */
  state?: PlayState;
  /** Internal replay hook used by the catalog playground (uncontrolled only). */
  force?: boolean;
};

/**
 * Play triangle ⇄ pause bars. Two modes:
 *  - uncontrolled: the original squash-and-return "play" tap animation
 *  - controlled (`state` set): cross-fades to and *stays* at "play" or "pause"
 *
 * The triangle and the two bars are always in the DOM; the transition is an
 * opacity/scale cross-fade between them (not a geometric path morph), which
 * stays crisp at every size and avoids intermediate garbled shapes.
 */
export function Play({
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
    ? state === "pause"
      ? "pause"
      : "play"
    : force && !reduced
      ? "tap"
      : "rest";

  const t = reduced
    ? { duration: 0 }
    : { duration: 0.26, ease: [0.4, 0, 0.2, 1] as const };

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
        initial={controlled ? (state === "pause" ? "pause" : "play") : "rest"}
        animate={animate}
        whileTap={controlled || reduced ? undefined : "tap"}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.path
          fill="transparent"
          style={{ originX: "10px", originY: "12px" }}
          d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
          variants={{
            rest: { opacity: 1, scale: 1 },
            play: { opacity: 1, scale: 1, transition: t },
            pause: { opacity: 0, scale: 0.7, transition: t },
            tap: { scale: [1, 0.85, 1.1, 1], transition: { duration: 0.35, ease: "easeOut" } },
          }}
        />

        <motion.rect
          x="5"
          y="3"
          width="5"
          height="18"
          rx="1"
          style={{ originX: "7.5px", originY: "12px" }}
          variants={{
            rest: { opacity: 0, scaleX: 0.4 },
            play: { opacity: 0, scaleX: 0.4, transition: t },
            pause: { opacity: 1, scaleX: 1, transition: t },
            tap: { opacity: 0, scaleX: 0.4 },
          }}
        />
        <motion.rect
          x="14"
          y="3"
          width="5"
          height="18"
          rx="1"
          style={{ originX: "16.5px", originY: "12px" }}
          variants={{
            rest: { opacity: 0, scaleX: 0.4 },
            play: { opacity: 0, scaleX: 0.4, transition: t },
            pause: { opacity: 1, scaleX: 1, transition: { ...t, delay: reduced ? 0 : 0.04 } },
            tap: { opacity: 0, scaleX: 0.4 },
          }}
        />
      </motion.g>
    </svg>
  );
}
