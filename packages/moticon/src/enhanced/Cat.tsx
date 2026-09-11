"use client";

// Auto-generated enhanced copy. src/icons/Cat.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalCat({
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
      <motion.g initial="rest" animate={force && !reduced ? "blink" : "rest"} whileHover={reduced ? undefined : "blink"}>
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
        <motion.path
          variants={{
            rest: { scaleY: 1 },
            blink: { scaleY: [1, 0.1, 1], transition: { duration: 0.25, ease: "easeInOut" } },
          }}
          d="M8 14v.5"
        />
        <motion.path
          variants={{
            rest: { scaleY: 1 },
            blink: { scaleY: [1, 0.1, 1], transition: { duration: 0.25, ease: "easeInOut" } },
          }}
          d="M16 14v.5"
        />
        <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      </motion.g>
    </svg>
  );
}

export const Cat = createEnhancedIcon(OriginalCat, {"name":"Cat","mechanic":"blink","profile":"energy","director":{"accent":"glow","anchor":[6.05,9.39],"vector":[3,3],"duration":0.426,"intensity":0.987,"complexity":3.0417}});
