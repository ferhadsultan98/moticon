"use client";

// Auto-generated enhanced copy. src/icons/Wind.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalWind({
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
      <motion.g initial="rest" animate={force && !reduced ? "blow" : "rest"} whileHover={reduced ? undefined : "blow"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0 },
            blow: { x: [0, 2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="M9.8 4.4A2 2 0 1 1 11 8H2"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            blow: { x: [0, 3, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.08 } },
          }}
          d="M17.5 8a2.5 2.5 0 1 1 2 4H2"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            blow: { x: [0, 2, 0], transition: { duration: 0.4, ease: "easeInOut", delay: 0.16 } },
          }}
          d="M12.8 19.6A2 2 0 1 0 14 16H2"
        />
      </motion.g>
    </svg>
  );
}

export const Wind = createEnhancedIcon(OriginalWind, {"name":"Wind","mechanic":"blow","profile":"travel","director":{"accent":"wave","anchor":[5.11,5],"vector":[2,3],"duration":0.572,"intensity":0.933,"complexity":4.0379}});
