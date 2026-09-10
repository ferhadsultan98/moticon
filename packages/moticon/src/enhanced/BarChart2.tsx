"use client";

// Auto-generated enhanced copy. src/icons/BarChart2.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBarChart2({
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
      <motion.g initial="rest" animate={force && !reduced ? "compare" : "rest"} whileTap={reduced ? undefined : "compare"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "5px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1 },
            compare: { scaleY: [1, 1.15, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M5 21v-6"
        />
        <path d="M12 21V3" />
        <motion.path
          style={{ originX: "19px", originY: "21px" }}
          variants={{
            rest: { scaleY: 1 },
            compare: { scaleY: [1, 1.15, 1], transition: { duration: 0.3, ease: "easeOut", delay: 0.1 } },
          }}
          d="M19 21V9"
        />
      </motion.g>
    </svg>
  );
}

export const BarChart2 = createEnhancedIcon(OriginalBarChart2, {"name":"BarChart2","mechanic":"compare","profile":"reveal","director":{"accent":"stretch","anchor":[5,21],"vector":[3,3],"duration":0.472,"intensity":0.979,"complexity":3.0375}});
