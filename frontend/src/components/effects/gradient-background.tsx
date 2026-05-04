export function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#030712]">
      <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="absolute right-[-12rem] top-40 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-16rem] left-[-8rem] h-[34rem] w-[34rem] rounded-full bg-orange-500/20 blur-3xl" />
    </div>
  );
}
