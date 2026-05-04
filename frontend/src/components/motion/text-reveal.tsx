"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
};

export function TextReveal({ text, className }: TextRevealProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: 28, rotateX: -45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: index * 0.055, duration: 0.55, ease: "easeOut" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}
