"use client";

// Auto-generated enhanced copy. src/icons/ShoppingCart.tsx is not imported at runtime.
import { createEnhancedIcon } from "./createEnhancedIcon";
import { motion, useReducedMotion } from "motion/react";
import type { MoticonIconProps } from "../icons/types";

function OriginalShoppingCart({
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
      <motion.g
        initial="rest" animate={force && !reduced ? "roll" : "rest"}
        whileHover={reduced ? undefined : "roll"}
        variants={{
          rest: { x: 0, rotate: 0 },
          roll: {
            x: [0, 2, 0, -2, 0],
            rotate: [0, 3, 0, -3, 0],
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "21px" }}
      >
        <rect x="0" y="0" width="24" height="24" fill="transparent" stroke="none" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
      </motion.g>
    </svg>
  );
}

export const ShoppingCart = createEnhancedIcon(OriginalShoppingCart, {"name":"ShoppingCart","mechanic":"roll","profile":"orbit","director":{"accent":"orbit","anchor":[12,21],"vector":[2,3],"duration":0.764,"intensity":1.044,"complexity":1.0178}});
