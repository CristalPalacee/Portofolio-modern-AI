"use client";

import { Typewriter } from "react-simple-typewriter";

type TypewriterHeadlineProps = {
  words: string[];
  fallback: string;
  className?: string;
};

export function TypewriterHeadline({
  words,
  fallback,
  className,
}: TypewriterHeadlineProps) {
  return (
    <>
      <span className="sr-only">{fallback}</span>
      <span
        aria-hidden="true"
        className={className}
      >
        <Typewriter
          words={words}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={58}
          deleteSpeed={34}
          delaySpeed={1400}
        />
      </span>
    </>
  );
}
