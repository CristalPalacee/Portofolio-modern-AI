"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  blur?: number;
};

export function FadeIn({ children, delay = 0, className, blur = 0, duration = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{ opacity: 1, y: 0,
        filter: "blur(0px)",
       }}
      viewport={{ once: true, margin: "-80px",

       }}
      transition={{ duration: duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
