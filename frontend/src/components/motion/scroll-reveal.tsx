"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "top" | "right" | "bottom" | "left";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  blur? : number
};

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  top: { x: 0, y: -40 },
  right: { x: 40, y: 0 },
  bottom: { x: 0, y: 40 },
  left: { x: -40, y: 0 },
};

export function ScrollReveal({
  children,
  className,
  direction = "bottom",
  distance = 40,
  delay = 0,
  duration = 0.65,
  once = false,
  blur = 0
}: ScrollRevealProps) {
  const offset = directionOffset[direction];
  const transition: Transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x === 0 ? 0 : Math.sign(offset.x) * distance,
        y: offset.y === 0 ? 0 : Math.sign(offset.y) * distance,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={transition}
      viewport={{ once, amount: 0.22, margin: "0px 0px -80px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type DirectionalRevealProps = Omit<ScrollRevealProps, "direction">;

export function ScrollFromTop(props: DirectionalRevealProps) {
  return <ScrollReveal direction="top" {...props} />;
}

export function ScrollFromRight(props: DirectionalRevealProps) {
  return <ScrollReveal direction="right" {...props} />;
}

export function ScrollFromBottom(props: DirectionalRevealProps) {
  return <ScrollReveal direction="bottom" {...props} />;
}

export function ScrollFromLeft(props: DirectionalRevealProps) {
  return <ScrollReveal  duration={1} direction="left" {...props} />;
}
