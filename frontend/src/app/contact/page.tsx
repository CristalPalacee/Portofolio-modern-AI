import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact - Bigboss Portfolio",
  description: "Hubungi Bigboss melalui email, WhatsApp, LinkedIn, Instagram, atau GitHub.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20">
      <ContactSection />
    </div>
  );
}
