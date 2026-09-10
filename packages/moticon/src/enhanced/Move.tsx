"use client";

// Auto-generated enhanced copy. src/icons/Move.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMove({
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
      <motion.g initial="rest" animate={force && !reduced ? "drag" : "rest"} whileTap={reduced ? undefined : "drag"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <motion.path
          variants={{
            rest: { y: 0 },
            drag: { y: -2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m9 5 3-3 3 3"
        />
        <motion.path
          variants={{
            rest: { y: 0 },
            drag: { y: 2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m15 19-3 3-3-3"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drag: { x: 2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m19 9 3 3-3 3"
        />
        <motion.path
          variants={{
            rest: { x: 0 },
            drag: { x: -2, transition: { duration: 0.25, ease: "easeOut" } },
          }}
          d="m5 9-3 3 3 3"
        />
      </motion.g>
    </svg>
  );
}

export const Move = createEnhancedIcon(OriginalMove, {"name":"Move","mechanic":"drag","profile":"precision","director":{"accent":"spark","anchor":[7.4,6.17],"vector":[3,3],"duration":0.434,"intensity":0.907,"complexity":5.065}});
