"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

export type MotionProfile =
  | "energy" | "oscillate" | "orbit" | "travel" | "impact"
  | "sway" | "flow" | "reveal" | "precision";

export type MotionAccent =
  | "ripple" | "echo" | "trail" | "impact" | "orbit" | "scan"
  | "draw" | "glow" | "burst" | "flow" | "hinge" | "stretch"
  | "dust" | "wave" | "confirm" | "spark";

export interface MotionDirector {
  accent: MotionAccent;
  anchor: [number, number];
  vector: [number, number];
  duration: number;
  intensity: number;
  complexity: number;
}

export interface EnhancedIconConfig {
  name: string;
  mechanic: string;
  profile: MotionProfile;
  director: MotionDirector;
}

export interface EnhancedIconProps extends MoticonIconProps {
  /** Internal replay hook used by the catalog playground. */
  force?: boolean;
}

function SemanticAccent({ director }: { director: MotionDirector }) {
  const [x, y] = director.anchor;
  const [dx, dy] = director.vector;
  const duration = director.duration;
  const opacity = director.intensity * .72;
  const draw: Variants = {
    rest: { opacity: 0, pathLength: 0 },
    active: { opacity: [0, opacity, 0], pathLength: [0, 1, 1], transition: { duration, ease: "easeOut" } },
  };
  const pop: Variants = {
    rest: { opacity: 0, scale: .35 },
    active: { opacity: [0, opacity, 0], scale: [.35, 1, 1.35], transition: { duration, ease: "easeOut" } },
  };
  const dot: Variants = {
    rest: { opacity: 0, x: 0, y: 0, scale: .4 },
    active: { opacity: [0, opacity, 0], x: [0, dx, dx * 1.55], y: [0, dy, dy * 1.55], scale: [.4, 1, .65], transition: { duration: duration * .82, delay: .12, ease: "easeOut" } },
  };
  const common = { fill: "none", stroke: "currentColor", strokeWidth: .98 + Math.min(.34, director.complexity * .018), strokeLinecap: "round" as const };

  let content;
  switch (director.accent) {
    case "ripple":
      content = <><motion.circle {...common} cx={x} cy={y} r="3" variants={pop}/><motion.circle {...common} cx={x} cy={y} r="6" variants={{...pop,active:{...pop.active,transition:{duration,delay:.12,ease:"easeOut"}}}}/></>;
      break;
    case "echo":
      content = <><motion.path {...common} d={`M${x-5} ${y-4}c-2 2-2 6 0 8`} variants={draw}/><motion.path {...common} d={`M${x+5} ${y-4}c2 2 2 6 0 8`} variants={{...draw,active:{...draw.active,transition:{duration,delay:.08,ease:"easeOut"}}}}/></>;
      break;
    case "trail":
      content = <><motion.path {...common} d={`M${x-dx*1.8} ${y-dy*1.8}L${x-dx*.35} ${y-dy*.35}`} variants={draw}/><motion.circle cx={x-dx} cy={y-dy} r=".8" fill="currentColor" stroke="none" variants={dot}/></>;
      break;
    case "impact":
      content = <><motion.path {...common} d={`M${x-7} ${y+4}h14`} variants={draw}/><motion.circle {...common} cx={x} cy={y} r="4" variants={pop}/></>;
      break;
    case "orbit":
      content = <><motion.ellipse {...common} cx={x} cy={y} rx="7" ry="4.4" variants={draw}/><motion.circle cx={x+7} cy={y} r="1" fill="currentColor" stroke="none" variants={{rest:{opacity:0,rotate:0},active:{opacity:[0,opacity,0],rotate:[0,360],transition:{duration,ease:"easeInOut"}}}} style={{originX:`${x}px`,originY:`${y}px`}}/></>;
      break;
    case "scan":
      content = <motion.path {...common} d="M3 7h18" variants={{rest:{opacity:0,y:-3,pathLength:0},active:{opacity:[0,opacity,opacity,0],y:[-3,0,10,13],pathLength:[0,1,1,0],transition:{duration,ease:"easeInOut"}}}}/>;
      break;
    case "draw":
      content = <motion.path {...common} d="M3 18c4-7 8 2 12-5 2-3 3-5 6-7" variants={draw}/>;
      break;
    case "glow":
      content = <motion.circle cx={x} cy={y} r="7" fill="currentColor" stroke="none" variants={{rest:{opacity:0,scale:.6},active:{opacity:[0,opacity*.28,0],scale:[.6,1,1.22],transition:{duration,ease:"easeOut"}}}} style={{originX:`${x}px`,originY:`${y}px`,filter:"blur(2px)"}}/>;
      break;
    case "burst":
      content = <>{[[0,-7],[7,0],[0,7],[-7,0]].map(([bx,by],i)=><motion.path key={i} {...common} d={`M${x+bx*.55} ${y+by*.55}L${x+bx} ${y+by}`} variants={{...draw,active:{...draw.active,transition:{duration:duration*.65,delay:i*.035,ease:"easeOut"}}}}/>)}</>;
      break;
    case "flow":
      content = <>{[0,.28,.5].map((delay,i)=><motion.circle key={i} cx={x-dx} cy={y-dy} r={1-i*.18} fill="currentColor" stroke="none" variants={{...dot,active:{...dot.active,transition:{duration:duration*.7,delay,ease:"easeOut"}}}}/>)}</>;
      break;
    case "hinge":
      content = <motion.path {...common} d={`M${x-6} ${y+2}A7 7 0 0 1 ${x+5} ${y-4}`} variants={draw}/>;
      break;
    case "stretch":
      content = <motion.rect {...common} x="4" y="6" width="16" height="12" rx="3" variants={{rest:{opacity:0,scaleX:.5},active:{opacity:[0,opacity,0],scaleX:[.5,1.12,1],transition:{duration,ease:"easeOut"}}}} style={{originX:"12px",originY:"12px"}}/>;
      break;
    case "dust":
      content = <>{[-1,0,1].map((side,i)=><motion.circle key={i} cx={x+side*2} cy={y+2} r={.8-i*.08} fill="currentColor" stroke="none" variants={{rest:{opacity:0,x:0,y:0},active:{opacity:[0,opacity,0],x:[0,side*4,side*6],y:[0,3,6],transition:{duration:duration*.72,delay:i*.06,ease:"easeOut"}}}}/>)}</>;
      break;
    case "wave":
      content = <><motion.path {...common} d={`M${x+3} ${y-3}q4 3 0 6`} variants={draw}/><motion.path {...common} d={`M${x+6} ${y-5}q6 5 0 10`} variants={{...draw,active:{...draw.active,transition:{duration,delay:.1,ease:"easeOut"}}}}/></>;
      break;
    case "confirm":
      content = <><motion.circle {...common} cx={x} cy={y} r="7" variants={pop}/><motion.path {...common} d={`M${x-3} ${y}l2 2 4-5`} variants={{...draw,active:{...draw.active,transition:{duration:duration*.6,delay:.18,ease:"easeOut"}}}}/></>;
      break;
    default:
      content = <><motion.circle cx={x} cy={y} r="1" fill="currentColor" stroke="none" variants={dot}/><motion.path {...common} d={`M${x-5} ${y-5}l-2-2M${x+5} ${y-5}l2-2`} variants={draw}/></>;
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24" style={{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible",pointerEvents:"none"}}>{content}</svg>;
}

export function createEnhancedIcon(OriginalIcon: ComponentType<EnhancedIconProps>, config: EnhancedIconConfig) {
  function EnhancedIcon({ size = 24, color = "currentColor", strokeWidth = 2, force = false, ...props }: EnhancedIconProps) {
    const reduced = useReducedMotion();
    const active = reduced ? undefined : "active";
    return (
      <motion.span
        initial="rest"
        animate={force && active ? active : "rest"}
        whileHover={active}
        whileTap={active}
        data-motion-profile={config.profile}
        data-motion-mechanic={config.mechanic}
        data-motion-accent={config.director.accent}
        style={{ position: "relative", display: "inline-grid", placeItems: "center", width: size, height: size, color, verticalAlign: "middle", isolation: "isolate" }}
      >
        <SemanticAccent director={config.director} />
        <span style={{ display: "inline-grid", placeItems: "center" }}>
          <OriginalIcon size={size} color={color} strokeWidth={strokeWidth} force={force} {...props} />
        </span>
      </motion.span>
    );
  }

  EnhancedIcon.displayName = config.name;
  return EnhancedIcon;
}
