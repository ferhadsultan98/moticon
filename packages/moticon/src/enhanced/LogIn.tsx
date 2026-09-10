"use client";

// Auto-generated enhanced copy. src/icons/LogIn.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLogIn({
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
      <motion.g initial="rest" animate={force && !reduced ? "enter" : "rest"} whileHover={reduced ? undefined : "enter"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />

        <motion.g
          variants={{
            rest: { x: 0 },
            enter: {
              x: [0, 3.6, 2.9, 3.15],
              transition: { duration: 0.34, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
            },
          }}
        >
          <path d="m10 17 5-5-5-5" />
          <path d="M15 12H3" />
        </motion.g>
      </motion.g>
    </svg>
  );
}

export const LogIn = createEnhancedIcon(OriginalLogIn, {"name":"LogIn","mechanic":"enter","profile":"travel","director":{"accent":"trail","anchor":[6.27,5],"vector":[3.6,3],"duration":0.422,"intensity":1.03,"complexity":2.0388}});
