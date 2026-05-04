import type { Metadata } from "next";

import { ChatbotExperience } from "@/components/sections/chatbot-experience";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ruang Curhat - Bigboss Portfolio",
  description:
    "Halaman chatbot sederhana untuk curhat ringan dengan tampilan chat yang tenang dan fokus.",
  path: "/chatbot/",
});

export default function ChatbotPage() {
  return <ChatbotExperience />;
}
