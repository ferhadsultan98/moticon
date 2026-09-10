"use client";

// Auto-generated enhanced copy. src/icons/Shirt.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalShirt({
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
      <motion.path
        fill="transparent"
        style={{ originX: "12px", originY: "2px" }}
        initial="rest" animate={force && !reduced ? "stretch" : "rest"}
        whileHover={reduced ? undefined : "stretch"}
        variants={{
          rest: { scaleX: 1 },
          stretch: { scaleX: [1, 1.08, 1], transition: { duration: 0.7, ease: "easeInOut" } },
        }}
        d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
      />
    </svg>
  );
}

export const Shirt = createEnhancedIcon(OriginalShirt, {"name":"Shirt","mechanic":"stretch","profile":"reveal","director":{"accent":"stretch","anchor":[12,2],"vector":[3,3],"duration":0.864,"intensity":1.052,"complexity":1.013}});
