"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };
const keys = [[6,8,.02],[10,8,.12],[14,8,.22],[18,8,.32],[8,12,.09],[12,12,.19],[16,12,.29]];

export function Keyboard({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "type";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.g variants={{ rest: { y: 0, rotate: 0 }, type: { y: [0, .65, -.72, .22, 0], rotate: [0, -1.3, 1.05, -.35, 0], transition: { duration: .78, times: [0, .18, .46, .72, 1], ease: "easeInOut" } } }} style={{ originX: "12px", originY: "18px" }}>
          <motion.rect width="20" height="16" x="2" y="4" rx="2" variants={{ rest: { scale: 1 }, type: { scale: [1, .965, 1.025, 1], transition: { duration: .7, ease: "easeInOut" } } }} style={{ originX: "12px", originY: "12px" }} />
          {keys.map(([x,y,delay], index) => (
            <motion.g key={index}>
              <motion.path d={`M${x} ${y}h.01`} variants={{ rest: { y: 0, scale: 1 }, type: { y: [0, 1.35, -.2, 0], scale: [1, .58, 1.16, 1], transition: { duration: .24, delay, ease: "easeOut" } } }} />
              <motion.circle cx={x} cy={y} r="1.35" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0, scale: .3 }, type: { opacity: [0, .38, .16, 0], scale: [.3, 1.12, .72, .5], transition: { duration: .3, delay, ease: "easeOut" } } }} style={{ originX: `${x}px`, originY: `${y}px` }} />
            </motion.g>
          ))}
          <motion.path d="M7 16h10" variants={{ rest: { y: 0, pathLength: 1, scaleX: 1 }, type: { y: [0, 1.15, -.18, 0], pathLength: [1, .78, 1, 1], scaleX: [1, .86, 1.04, 1], transition: { duration: .3, delay: .4, ease: "easeOut" } } }} style={{ originX: "12px", originY: "16px" }} />
        </motion.g>
        {[8, 12, 16].map((x, index) => (
          <motion.path key={x} d={`M${x} 3.2v-1.4`} variants={{ rest: { opacity: 0, pathLength: 0, y: 2 }, type: { opacity: [0, .95, .72, 0], pathLength: [0, 1, 1, 1], y: [2, 0, -1.2, -2.2], transition: { duration: .38, delay: .1 + index * .12, times: [0, .3, .72, 1], ease: "easeOut" } } }} />
        ))}
      </motion.g>
    </svg>
  );
}
