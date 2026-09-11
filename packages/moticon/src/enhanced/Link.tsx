"use client";

// Auto-generated enhanced copy. src/icons/Link.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalLink({
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
      <motion.g initial="rest" animate={force && !reduced ? "link" : "rest"} whileHover={reduced ? undefined : "link"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            link: { x: 0.8, y: 0.8, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        />
        <motion.path
          variants={{
            rest: { x: 0, y: 0 },
            link: { x: -0.8, y: -0.8, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        />
      </motion.g>
    </svg>
  );
}

export const Link = createEnhancedIcon(OriginalLink, {"name":"Link","mechanic":"link","profile":"flow","director":{"accent":"flow","anchor":[5,5],"vector":[3,3],"duration":0.418,"intensity":0.973,"complexity":3.0209}});
