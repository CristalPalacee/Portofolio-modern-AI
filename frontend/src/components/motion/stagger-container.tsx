"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  blur? : number
  delay?: number
};

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  duration = 0,
  blur = 0,
  delay = 0
}: StaggerContainerProps) {
  return (
    <motion.div
      initial= {
        {
          opacity: 0,
          y: 22,
          filter: `blur(${blur}px)`
        }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: duration, ease: "easeOut", delay  }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
