"use client";

// Auto-generated enhanced copy. src/icons/Euro.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalEuro({
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
      <motion.g initial="rest" animate={force && !reduced ? "cash" : "rest"} whileTap={reduced ? undefined : "cash"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M4 10h12" />
        <path d="M4 14h9" />
        <motion.path
          variants={{
            rest: { scale: 1 },
            cash: { scale: [1, 1.1, 1], transition: { duration: 0.3, ease: "easeOut" } },
          }}
          style={{ originX: "12px", originY: "12px" }}
          d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
        />
      </motion.g>
    </svg>
  );
}

export const Euro = createEnhancedIcon(OriginalEuro, {"name":"Euro","mechanic":"cash","profile":"precision","director":{"accent":"spark","anchor":[12,12],"vector":[3,3],"duration":0.472,"intensity":1.03,"complexity":2.0371}});
