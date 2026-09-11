"use client";

// Auto-generated enhanced copy. src/icons/Book.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalBook({
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
        style={{ originX: "6.5px", originY: "12px" }}
        initial="rest" animate={force && !reduced ? "flip" : "rest"}
        whileHover={reduced ? undefined : "flip"}
        variants={{
          rest: { scaleX: 1, skewY: 0 },
          flip: { scaleX: [1, 0.92, 1], skewY: [0, 1.5, 0], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      />
    </svg>
  );
}

export const Book = createEnhancedIcon(OriginalBook, {"name":"Book","mechanic":"flip","profile":"precision","director":{"accent":"spark","anchor":[6.5,12],"vector":[3,3],"duration":0.664,"intensity":1.054,"complexity":1.0161}});
