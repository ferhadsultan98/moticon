"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

export function GraduationCap({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "celebrate";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" variants={{ rest: { scaleY: 1, y: 0 }, celebrate: { scaleY: [1, .88, 1.06, 1], y: [0, .5, -.25, 0], transition: { duration: .72, ease: "easeInOut" } } }} style={{ originX: "12px", originY: "16px" }} />
        <motion.g variants={{ rest: { y: 0, rotate: 0 }, celebrate: { y: [0, 1, -7.2, -4.8, 0], rotate: [0, -3, 11, -5, 0], transition: { duration: .88, times: [0, .15, .42, .68, 1], ease: "easeInOut" } } }} style={{ originX: "12px", originY: "10px" }}>
          <path fill="transparent" d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <motion.path d="M22 10v6" variants={{ rest: { rotate: 0 }, celebrate: { rotate: [0, -18, 24, -10, 0], transition: { duration: .88, times: [0, .28, .5, .75, 1], ease: "easeInOut" } } }} style={{ originX: "22px", originY: "10px" }} />
        </motion.g>
        {[[4,5,2,3],[19,4,21,2],[6,2,6,0],[17,1,18,-1]].map(([x1,y1,x2,y2], i) => (
          <motion.path key={i} d={`M${x1} ${y1}L${x2} ${y2}`} variants={{ rest: { opacity: 0, pathLength: 0 }, celebrate: { opacity: [0, .75, 0], pathLength: [0, 1, 1], transition: { duration: .4, delay: .3 + i * .045, ease: "easeOut" } } }} />
        ))}
      </motion.g>
    </svg>
  );
}
