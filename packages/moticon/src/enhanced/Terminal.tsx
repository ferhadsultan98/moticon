"use client";

// Auto-generated enhanced copy. src/icons/Terminal.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalTerminal({
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
      <motion.g initial="rest" animate={force && !reduced ? "run" : "rest"} whileHover={reduced ? undefined : "run"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0 },
            run: { x: [0, 2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
          }}
          d="m4 17 6-6-6-6"
        />
        <motion.path
          variants={{
            rest: { opacity: 1 },
            run: { opacity: [1, 0.2, 1], transition: { duration: 0.6, repeat: Infinity } },
          }}
          d="M12 19h8"
        />
      </motion.g>
    </svg>
  );
}

export const Terminal = createEnhancedIcon(OriginalTerminal, {"name":"Terminal","mechanic":"run","profile":"travel","director":{"accent":"trail","anchor":[7.33,18],"vector":[2,3],"duration":0.568,"intensity":0.975,"complexity":3.0206}});
