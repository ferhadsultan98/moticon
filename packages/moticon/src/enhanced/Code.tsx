"use client";

// Auto-generated enhanced copy. src/icons/Code.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCode({
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
      <motion.g initial="rest" animate={force && !reduced ? "apart" : "rest"} whileHover={reduced ? undefined : "apart"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />

        <motion.path
          variants={{
            rest: { x: 0 },
            apart: {
              x: [0, 2.4, 1.9, 2.1],
              transition: { duration: 0.32, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
            },
          }}
          d="m16 18 6-6-6-6"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            apart: {
              x: [0, -2.4, -1.9, -2.1],
              transition: { duration: 0.32, ease: "easeOut", times: [0, 0.6, 0.85, 1] },
            },
          }}
          d="m8 6-6 6 6 6"
        />
      </motion.g>
    </svg>
  );
}

export const Code = createEnhancedIcon(OriginalCode, {"name":"Code","mechanic":"apart","profile":"reveal","director":{"accent":"stretch","anchor":[9,9],"vector":[2.4,3],"duration":0.418,"intensity":0.972,"complexity":3.0259}});
