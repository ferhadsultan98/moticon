"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

const lid: Variants = {
  rest: { scaleY: 1, y: 0 },
  focus: {
    scaleY: [1, .92, .08, 1, .94, 1],
    y: [0, 0, 0, 0, -.15, 0],
    transition: { duration: .72, times: [0, .18, .36, .53, .76, 1], ease: "easeInOut" },
  },
};

const iris: Variants = {
  rest: { x: 0, y: 0, scale: 1, opacity: 1 },
  focus: {
    x: [0, -1.15, -1.15, 1.2, 0],
    y: [0, .2, .2, -.1, 0],
    scale: [1, .94, .25, 1.12, 1],
    opacity: [1, 1, 0, 1, 1],
    transition: { duration: .72, times: [0, .22, .39, .68, 1], ease: "easeInOut" },
  },
};

export function Eye({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "focus";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.path style={{ originX: "12px", originY: "12px" }} variants={lid} d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <motion.g variants={iris} style={{ originX: "12px", originY: "12px" }}>
          <circle cx="12" cy="12" r="3" />
          <motion.circle cx="13" cy="11" r=".62" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0, scale: .4 }, focus: { opacity: [0, 0, .9, 0], scale: [.4, 1.15, 1, .5], transition: { duration: .45, delay: .34, ease: "easeOut" } } }} />
        </motion.g>
      </motion.g>
    </svg>
  );
}
