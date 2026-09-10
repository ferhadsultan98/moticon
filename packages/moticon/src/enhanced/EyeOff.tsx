"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

const sight: Variants = {
  rest: { opacity: 1, scaleY: 1, y: 0 },
  conceal: {
    opacity: [1, 1, .22, .48, 1],
    scaleY: [1, .72, .16, .5, 1],
    y: [0, .15, .35, .15, 0],
    transition: { duration: .78, times: [0, .18, .4, .7, 1], ease: "easeInOut" },
  },
};

export function EyeOff({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "conceal";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.g variants={sight} style={{ originX: "12px", originY: "12px" }}>
          <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
          <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
          <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        </motion.g>
        <motion.path variants={{ rest: { pathLength: 1, opacity: 1 }, conceal: { pathLength: [0, 1, 1], opacity: [0, 1, 1], transition: { duration: .5, times: [0, .72, 1], ease: "easeOut" } } }} d="m2 2 20 20" />
        <motion.path d="M17.8 5.4q2 1.1 3.1 3" variants={{ rest: { opacity: 0, pathLength: 0 }, conceal: { opacity: [0, .55, 0], pathLength: [0, 1, 1], transition: { duration: .42, delay: .25, ease: "easeOut" } } }} />
      </motion.g>
    </svg>
  );
}
