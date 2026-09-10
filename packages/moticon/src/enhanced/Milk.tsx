"use client";

// Auto-generated enhanced copy. src/icons/Milk.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMilk({
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
      <motion.g
        style={{ originX: "12px", originY: "22px" }}
        initial="rest" animate={force && !reduced ? "pour" : "rest"}
        whileHover={reduced ? undefined : "pour"}
        variants={{
          rest: { rotate: 0 },
          pour: { rotate: 8, transition: { duration: 0.4, ease: "easeOut" } },
        }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M8 2h8" />
        <path
          fill="transparent"
          d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
        />
        <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
      </motion.g>
    </svg>
  );
}

export const Milk = createEnhancedIcon(OriginalMilk, {"name":"Milk","mechanic":"pour","profile":"flow","director":{"accent":"flow","anchor":[12,22],"vector":[3,3],"duration":0.572,"intensity":1.063,"complexity":1.0318}});
