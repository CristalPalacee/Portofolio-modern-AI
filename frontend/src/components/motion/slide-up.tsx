"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SlideUpProps = {
  children: ReactNode;
  className?: string;
};

export function SlideUp({ children, className }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
