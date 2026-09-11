"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

export function Rocket({ size=24, color="currentColor", strokeWidth=2, force=false, ...props }: MoticonIconProps & { force?: boolean }) {
  const reduced=useReducedMotion(); const active=reduced?undefined:"launch";
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{overflow:"visible"}} {...props}>
    <motion.g initial="rest" animate={force&&active?active:"rest"} whileHover={active} whileTap={active}>
      <rect width="24" height="24" fill="transparent" stroke="none" />
      <motion.path d="M2.5 21 6 17.5M1.5 16.8 4 14.3M7.3 22.2 9.1 20.4" variants={{rest:{opacity:0,pathLength:0},launch:{opacity:[0,.75,0],pathLength:[0,1,1],transition:{duration:.55,delay:.28,ease:"easeOut"}}}} />
      <motion.g style={{originX:"12px",originY:"12px"}} variants={{rest:{x:0,y:0,rotate:0},launch:{x:[0,-.35,.35,0,5],y:[0,.2,-.2,0,-5.5],rotate:[0,-1.5,1.5,0,7],transition:{duration:.86,ease:"easeInOut"}}}}>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        <motion.path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" style={{originX:"7px",originY:"17px"}} variants={{rest:{scale:1,opacity:1},launch:{scale:[1,.82,1.22,.9,1.35],opacity:[1,.7,1,.8,.35],transition:{duration:.86}}}} />
        <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
      </motion.g>
    </motion.g>
  </svg>;
}
