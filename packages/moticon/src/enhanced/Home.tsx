"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

type Props = MoticonIconProps & { force?: boolean };

export function Home({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: Props) {
  const reduced = useReducedMotion();
  const active = reduced ? undefined : "welcome";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }} {...props}>
      <motion.g initial="rest" animate={force && active ? active : "rest"} whileHover={active} whileTap={active}>
        <rect width="24" height="24" fill="transparent" stroke="none" />
        <motion.path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" variants={{ rest: { y: 0, scale: 1 }, welcome: { y: [0, .45, -.85, 0], scale: [1, .97, 1.035, 1], transition: { duration: .86, times: [0, .15, .46, 1], ease: "easeInOut" } } }} style={{ originX: "12px", originY: "21px" }} />
        <motion.rect x="8.65" y="11.4" width="6.7" height="9.6" rx="1.25" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0, scale: .82 }, welcome: { opacity: [0, .08, .34, .34, 0], scale: [.82, .9, 1.08, 1.08, .9], transition: { duration: .86, times: [0, .2, .43, .72, 1], ease: "easeInOut" } } }} style={{ originX: "12px", originY: "17px" }} />
        <motion.path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" variants={{ rest: { scaleX: 1, x: 0 }, welcome: { scaleX: [1, 1, .08, .08, 1], x: [0, 0, -3.05, -3.05, 0], transition: { duration: .86, times: [0, .13, .37, .72, 1], ease: "easeInOut" } } }} style={{ originX: "9px", originY: "16px" }} />
        <motion.circle cx="13.55" cy="16.6" r=".55" fill="currentColor" stroke="none" variants={{ rest: { opacity: 0 }, welcome: { opacity: [0, 1, 1, 0], transition: { duration: .55, times: [0, .18, .72, 1] } } }} />
        <motion.path d="M20 16.5h-7.5m0 0 2.1-2.1m-2.1 2.1 2.1 2.1" variants={{ rest: { opacity: 0, pathLength: 0, x: 3 }, welcome: { opacity: [0, 1, 1, 0], pathLength: [0, 1, 1, 1], x: [3, 0, -1.5, -1.5], transition: { duration: .64, delay: .16, times: [0, .34, .76, 1], ease: "easeOut" } } }} />
        <motion.path d="M7.5 14.5 5.8 13m1.7 4.5-2 1M16.5 14.5l1.7-1.5m-1.7 4.5 2 1" variants={{ rest: { opacity: 0, pathLength: 0 }, welcome: { opacity: [0, .78, 0], pathLength: [0, 1, 1], transition: { duration: .46, delay: .3, ease: "easeOut" } } }} />
      </motion.g>
    </svg>
  );
}
