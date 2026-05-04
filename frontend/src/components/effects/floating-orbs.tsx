export function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <span className="orb left-[8%] top-[18%] bg-cyan-300/30" />
      <span className="orb right-[12%] top-[28%] bg-violet-400/25 [animation-delay:1.4s]" />
      <span className="orb bottom-[14%] left-[18%] bg-orange-300/20 [animation-delay:2.1s]" />
    </div>
  );
}
