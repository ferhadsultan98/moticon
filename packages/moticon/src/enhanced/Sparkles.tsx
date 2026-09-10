"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

const star="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z";

export function Sparkles({ size=24, color="currentColor", strokeWidth=2, force=false, ...props }: MoticonIconProps & { force?: boolean }) {
  const reduced=useReducedMotion(); const active=reduced?undefined:"twinkle";
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{overflow:"visible"}} {...props}>
    <motion.g initial="rest" animate={force&&active?active:"rest"} whileHover={active} whileTap={active}>
      <rect width="24" height="24" fill="transparent" stroke="none" />
      <motion.path d={star} variants={{rest:{opacity:0,scale:.72,rotate:-10},twinkle:{opacity:[0,.25,0],scale:[.72,1.18,1.38],rotate:[-10,5,12],transition:{duration:.78,ease:"easeOut"}}}} style={{originX:"12px",originY:"12px"}} />
      <motion.path d={star} fill="transparent" variants={{rest:{scale:1,rotate:0,pathLength:1},twinkle:{scale:[1,.82,1.2,.96,1],rotate:[0,-6,5,0],pathLength:[1,.55,1,1],transition:{duration:.82,ease:"easeInOut"}}}} style={{originX:"12px",originY:"12px"}} />
      <motion.path d="M20 2v4M22 4h-4" variants={{rest:{opacity:1,scale:1},twinkle:{opacity:[1,.15,1,.35,1],scale:[1,.55,1.35,.8,1],transition:{duration:.72,delay:.08}}}} style={{originX:"20px",originY:"4px"}} />
      <motion.circle cx="4" cy="20" r="2" variants={{rest:{opacity:1,scale:1},twinkle:{opacity:[1,.1,1],scale:[1,.4,1.3,1],transition:{duration:.58,delay:.22}}}} style={{originX:"4px",originY:"20px"}} />
    </motion.g>
  </svg>;
}
