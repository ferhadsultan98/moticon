"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

export function Download({ size=24, color="currentColor", strokeWidth=2, force=false, ...props }: MoticonIconProps & { force?: boolean }) {
  const reduced=useReducedMotion(); const active=reduced?undefined:"download";
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{overflow:"visible"}} {...props}>
    <motion.g initial="rest" animate={force&&active?active:"rest"} whileHover={active} whileTap={active}>
      <rect width="24" height="24" fill="transparent" stroke="none" />
      <motion.circle cx="12" cy="18" r="6" variants={{rest:{opacity:0,scale:.45},download:{opacity:[0,.22,0],scale:[.45,.8,1.35],transition:{duration:.55,delay:.38,ease:"easeOut"}}}} style={{originX:"12px",originY:"18px"}} />
      <motion.g variants={{rest:{y:0,opacity:1},download:{y:[0,1,5,3,0],opacity:[1,1,.18,.65,1],transition:{duration:.82,ease:"easeInOut"}}}}><path d="M12 15V3"/><path d="m7 10 5 5 5-5"/></motion.g>
      <motion.path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" style={{originX:"12px",originY:"18px"}} variants={{rest:{y:0,scaleX:1},download:{y:[0,1.2,0],scaleX:[1,1.08,1],transition:{duration:.42,delay:.3,ease:"backOut"}}}} />
      <motion.path d="M7 18h10" variants={{rest:{opacity:0,pathLength:0},download:{opacity:[0,.9,0],pathLength:[0,1,1],transition:{duration:.42,delay:.4,ease:"easeOut"}}}} />
    </motion.g>
  </svg>;
}
