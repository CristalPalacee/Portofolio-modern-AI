import type { ReactNode } from "react";
import { FloatingOrbs } from "@/components/effects/floating-orbs";
import { GradientBackground } from "@/components/effects/gradient-background";
import { GridBackground } from "@/components/effects/grid-background";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type PageWrapperProps = {
  children: ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <GradientBackground />
      <GridBackground />
      <FloatingOrbs />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
