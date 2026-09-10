"use client";

// Auto-generated enhanced copy. src/icons/PieChart.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalPieChart({
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
      <motion.g initial="rest" animate={force && !reduced ? "pull" : "rest"} whileHover={reduced ? undefined : "pull"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          style={{ originX: "12px", originY: "12px" }}
          variants={{
            rest: { x: 0, y: 0 },
            pull: { x: 1.5, y: -1.5, transition: { duration: 0.3, ease: "easeOut" } },
          }}
          d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
        />
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      </motion.g>
    </svg>
  );
}

export const PieChart = createEnhancedIcon(OriginalPieChart, {"name":"PieChart","mechanic":"pull","profile":"precision","director":{"accent":"stretch","anchor":[12,12],"vector":[3,3],"duration":0.468,"intensity":1.008,"complexity":2.0291}});
