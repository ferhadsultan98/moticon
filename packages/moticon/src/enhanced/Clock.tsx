"use client";

// Auto-generated enhanced copy. src/icons/Clock.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalClock({
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
      <motion.g initial="rest" animate={force && !reduced ? "tick" : "rest"} whileHover={reduced ? undefined : "tick"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { rotate: 0 },
            tick: { rotate: 360, transition: { duration: 0.8, ease: "easeInOut" } },
          }}
          d="M12 6v6l4 2"
        />
      </motion.g>
    </svg>
  );
}

export const Clock = createEnhancedIcon(OriginalClock, {"name":"Clock","mechanic":"tick","profile":"oscillate","director":{"accent":"spark","anchor":[12,12],"vector":[3,3],"duration":0.964,"intensity":1.013,"complexity":2.0182}});
