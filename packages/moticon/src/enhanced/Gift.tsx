"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

export function Gift({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "unwrap";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.g variants={{ rest: { scaleY: 1, y: 0 }, unwrap: { scaleY: [1, .94, 1.035, 1], y: [0, .45, -.2, 0], transition: { duration: .72, times: [0, .18, .48, 1], ease: "easeInOut" } } }} style={{ originX: "12px", originY: "21px" }}>
          <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
          <path d="M12 11v10" />
        </motion.g>
        <motion.g variants={{ rest: { y: 0, rotate: 0 }, unwrap: { y: [0, 1, -5.2, -3.6, 0], rotate: [0, 0, -5, 3, 0], transition: { duration: .82, times: [0, .16, .43, .7, 1], ease: "easeInOut" } } }} style={{ originX: "12px", originY: "9px" }}>
          <rect x="3" y="7" width="18" height="4" rx="1" />
          <path d="M12 7v4" />
          <motion.path variants={{ rest: { scaleX: 1, scaleY: 1 }, unwrap: { scaleX: [1, .9, 1.16, 1], scaleY: [1, 1.08, .94, 1], transition: { duration: .7, ease: "easeInOut" } } }} style={{ originX: "12px", originY: "7px" }} d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
        </motion.g>
        {[[-5,-2,-8,-5],[5,-2,8,-5],[-3,-5,-4,-9],[3,-5,4,-9]].map(([x1,y1,x2,y2], i) => (
          <motion.path key={i} d={`M${12+x1} ${8+y1}L${12+x2} ${8+y2}`} variants={{ rest: { opacity: 0, pathLength: 0 }, unwrap: { opacity: [0, .8, 0], pathLength: [0, 1, 1], transition: { duration: .42, delay: .27 + i * .035, ease: "easeOut" } } }} />
        ))}
      </motion.g>
    </svg>
  );
}
