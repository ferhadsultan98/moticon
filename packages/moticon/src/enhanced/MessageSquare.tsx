"use client";

// Auto-generated enhanced copy. src/icons/MessageSquare.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalMessageSquare({
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
        initial="rest" animate={force && !reduced ? "reply" : "rest"}
        whileHover={reduced ? undefined : "reply"}
        variants={{
          rest: { pathLength: 1 },
          reply: { pathLength: [0, 1], transition: { duration: 0.5, ease: "easeOut" } },
        }}
        d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
      />
    </svg>
  );
}

export const MessageSquare = createEnhancedIcon(OriginalMessageSquare, {"name":"MessageSquare","mechanic":"reply","profile":"flow","director":{"accent":"flow","anchor":[5,5],"vector":[3,3],"duration":0.664,"intensity":1.044,"complexity":1.0117}});
