import { Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { ScrollFromBottom, ScrollFromRight, ScrollFromTop } from "../motion/scroll-reveal";

export function ContactSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <Card className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.28),transparent_40%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
                  Contact
                </p>

                <ScrollFromTop duration={1} delay={0.2} blur={6} >
                  <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                    Punya ide? Kita bikin jadi halaman yang hidup.
                  </h2>
                </ScrollFromTop>

                <ScrollFromBottom duration={1} delay={0.2} blur={6} >

                  <p className="mt-5 max-w-2xl text-slate-300">
                    Tidak ada form backend di project static ini. Contact langsung
                    diarahkan ke email, WhatsApp, dan social link.
                  </p>

                </ScrollFromBottom>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ScrollFromBottom duration={1.9} delay={0.2} blur={6} >
                    <Button href={`mailto:${profile.email}`}>
                      <Mail className="mr-2" size={17} />
                      Email Me
                    </Button>
                  </ScrollFromBottom>
                  <ScrollFromBottom duration={1.9} delay={0.6} blur={6} >

                    <Button href={profile.whatsapp} variant="ghost">
                      <MessageCircle className="mr-2" size={17} />
                      WhatsApp
                    </Button>
                  </ScrollFromBottom>
                </div>
              </div>
              <div className="grid gap-3">
                {socialLinks.map((link, index) => (
                  <ScrollFromRight
                    key={link.label}
                    delay={index * 0.12}
                    duration={0.8}
                    distance={40}
                    blur={20}
                  >
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block rounded-2xl border border-white/10 bg-white/4 px-5 py-4 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </ScrollFromRight>
                ))}
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
