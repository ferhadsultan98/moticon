"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

const heart = "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5";

export function Heart({ size=24, color="currentColor", strokeWidth=2, force=false, ...props }: MoticonIconProps & { force?: boolean }) {
  const reduced=useReducedMotion(); const active=reduced?undefined:"beat";
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{overflow:"visible"}} {...props}>
    <motion.g initial="rest" animate={force&&active?active:"rest"} whileHover={active} whileTap={active}>
      <rect width="24" height="24" fill="transparent" stroke="none" />
      <motion.path d={heart} variants={{rest:{opacity:0,scale:.88},beat:{opacity:[0,.34,0],scale:[.88,1.12,1.42],transition:{duration:.72,ease:"easeOut"}}}} style={{originX:"12px",originY:"12px"}} />
      <motion.path d={heart} fill="transparent" variants={{rest:{scale:1},beat:{scale:[1,1.24,.94,1.14,1],transition:{duration:.68,ease:"easeInOut"}}}} style={{originX:"12px",originY:"12px"}} />
      <motion.path d="M12 1.2v1.3M2.4 5.2 3.7 6M21.6 5.2 20.3 6" variants={{rest:{opacity:0,pathLength:0},beat:{opacity:[0,1,0],pathLength:[0,1,1],transition:{duration:.38,delay:.15}}}} />
    </motion.g>
  </svg>;
}
