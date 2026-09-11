"use client";

// Auto-generated enhanced copy. src/icons/Cpu.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCpu({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  force = false,
  ...props
}: MoticonIconProps & { force?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      {...props}
    >
      <motion.g initial="rest" animate={force && !reduced ? "process" : "rest"} whileHover={reduced ? undefined : "process"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 20v2" />
        <path d="M12 2v2" />
        <path d="M17 20v2" />
        <path d="M17 2v2" />
        <path d="M2 12h2" />
        <path d="M2 17h2" />
        <path d="M2 7h2" />
        <path d="M20 12h2" />
        <path d="M20 17h2" />
        <path d="M20 7h2" />
        <path d="M7 20v2" />
        <path d="M7 2v2" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <motion.rect
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { opacity: 1, scale: 1 },
            process: { opacity: [1, 0.3, 1], scale: [1, 0.85, 1], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          x="8"
          y="8"
          width="8"
          height="8"
          rx="1"
        />
      </motion.g>
    </svg>
  );
}

export const Cpu = createEnhancedIcon(OriginalCpu, {"name":"Cpu","mechanic":"process","profile":"flow","director":{"accent":"flow","anchor":[12,12],"vector":[3,3],"duration":0.592,"intensity":1.101,"complexity":2.1273}});
