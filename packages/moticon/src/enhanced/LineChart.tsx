"use client";

// Auto-generated enhanced copy. src/icons/LineChart.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLineChart({
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
      <motion.g initial="rest" animate={force && !reduced ? "plot" : "rest"} whileHover={reduced ? undefined : "plot"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <motion.path
          variants={{
            rest: { pathLength: 1 },
            plot: { pathLength: [0, 1], transition: { duration: 0.45, ease: "easeOut" } },
          }}
          d="m19 9-5 5-4-4-3 3"
        />
      </motion.g>
    </svg>
  );
}

export const LineChart = createEnhancedIcon(OriginalLineChart, {"name":"LineChart","mechanic":"plot","profile":"reveal","director":{"accent":"draw","anchor":[7,5],"vector":[3,3],"duration":0.618,"intensity":1.007,"complexity":2.0251}});
