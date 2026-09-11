"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

export function Lamp({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "switch";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.ellipse cx="12" cy="10.5" rx="7.8" ry="6.8" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0, scale: .72 }, switch: { opacity: [0, 0, .14, .09, 0], scale: [.72, .72, 1.18, 1.32, 1.38], transition: { duration: .86, times: [0, .18, .4, .72, 1], ease: "easeOut" } } }} style={{ originX: "12px", originY: "10.5px" }} />
        <motion.path d="M4.7 11.4 8 3.23A2 2 0 0 1 9.846 2h4.308A2 2 0 0 1 16 3.23l3.3 8.17Z" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0 }, switch: { opacity: [0, .04, .38, .3, 0], transition: { duration: .86, times: [0, .18, .38, .72, 1], ease: "easeInOut" } } }} />
        <motion.path fill="transparent" d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" variants={{ rest: { scaleY: 1, rotate: 0 }, switch: { scaleY: [1, .94, 1.055, 1], rotate: [0, -1.8, 1.2, 0], transition: { duration: .78, times: [0, .18, .5, 1], ease: "easeInOut" } } }} style={{ originX: "12px", originY: "12px" }} />
        <path d="M12 12v6" />
        <motion.path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" variants={{ rest: { scaleY: 1, y: 0 }, switch: { scaleY: [1, .82, 1.09, 1], y: [0, .35, -.2, 0], transition: { duration: .48, delay: .08, ease: "easeOut" } } }} style={{ originX: "12px", originY: "22px" }} />
        <motion.path d="M17.2 6v5.2" variants={{ rest: { opacity: 0, y: -1.5, pathLength: 0 }, switch: { opacity: [0, 1, 1, 0], y: [-1.5, 0, 3.1, 1.2], pathLength: [0, 1, 1, 1], transition: { duration: .62, times: [0, .2, .56, 1], ease: "easeInOut" } } }} />
        <motion.circle cx="17.2" cy="12.2" r=".78" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0, y: -1.5 }, switch: { opacity: [0, 1, 1, 0], y: [-1.5, 0, 3.1, 1.2], transition: { duration: .62, times: [0, .2, .56, 1], ease: "easeInOut" } } }} />
        <motion.path d="M4 14 1.5 17m18.5-3 2.5 3M7 15.2l-1.2 3.5m11.2-3.5 1.2 3.5M12 13.8v3.2" variants={{ rest: { opacity: 0, pathLength: 0 }, switch: { opacity: [0, .92, .72, 0], pathLength: [0, 1, 1, 1], transition: { duration: .58, delay: .2, times: [0, .3, .72, 1], ease: "easeOut" } } }} />
      </motion.g>
    </svg>
  );
}
