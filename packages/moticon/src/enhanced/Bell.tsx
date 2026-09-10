"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

export function Bell({ size=24, color="currentColor", strokeWidth=2, force=false, ...props }: MoticonIconProps & { force?: boolean }) {
  const reduced=useReducedMotion(); const active=reduced?undefined:"ring";
  const wave={rest:{opacity:0,pathLength:0},ring:{opacity:[0,.65,0],pathLength:[0,1,1],transition:{duration:.48,delay:.12}}};
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{overflow:"visible"}} {...props}>
    <motion.g initial="rest" animate={force&&active?active:"rest"} whileHover={active} whileTap={active}>
      <rect width="24" height="24" fill="transparent" stroke="none" />
      <motion.path d="M3.2 6.3C1.9 8 1.9 10 3.1 11.7" variants={wave} />
      <motion.path d="M20.8 6.3c1.3 1.7 1.3 3.7.1 5.4" variants={wave} />
      <motion.g style={{originX:"12px",originY:"4px"}} variants={{rest:{rotate:0},ring:{rotate:[0,-18,15,-11,8,-4,0],transition:{duration:.82,ease:"easeInOut"}}}}>
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
        <motion.path d="M10.268 21a2 2 0 0 0 3.464 0" style={{originX:"12px",originY:"17px"}} variants={{rest:{x:0,rotate:0},ring:{x:[0,1.6,-1.3,1,-.5,0],rotate:[0,9,-7,5,-2,0],transition:{duration:.82,ease:"easeInOut"}}}} />
      </motion.g>
    </motion.g>
  </svg>;
}
