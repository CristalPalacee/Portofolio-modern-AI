"use client";

import { FormEvent, useRef, useState } from "react";

import { sendChatMessage, streamChatMessage } from "@/lib/chatbot-api";
import type { ChatMessage } from "@/types/chatbot";

const starterMessages: ChatMessage[] = [
  {
    id: "assistant-welcome",
    role: "assistant",
    content:
      "Hai, aku di sini buat dengerin. Cerita aja pelan-pelan, lagi kepikiran apa?",
  },
];

const fallbackReply =
  "Aku belum bisa menghubungi AI backend sekarang. Tapi aku tetap dengerin. Coba pastikan backend NestJS dan Ollama sudah berjalan, lalu kirim lagi ceritamu.";

export function useCurhatChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string>();
  const [isThinking, setIsThinking] = useState(false);

  // Toggle stream ON/OFF
  const [isStreamEnabled, setIsStreamEnabled] = useState(true);

  const messageId = useRef(0);

  function nextId(prefix: string) {
    messageId.current += 1;
    return `${prefix}-${messageId.current}`;
  }

  async function sendMessage() {
    const content = input.trim();

    if (!content || isThinking) {
      return;
    }

    const userMessage: ChatMessage = {
      id: nextId("user"),
      role: "user",
      content,
    };

    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setIsThinking(true);

    try {
      /**
       * MODE STREAM ON
       * Jawaban AI akan muncul bertahap/token demi token.
       */
      if (isStreamEnabled) {
        const assistantMessageId = nextId("assistant-stream");

        const assistantMessage: ChatMessage = {
          id: assistantMessageId,
          role: "assistant",
          content: "",
        };

        // Tambahkan bubble assistant kosong dulu.
        setMessages([...nextMessages, assistantMessage]);

        await streamChatMessage(
          {
            messages: nextMessages
              // Starter message dari frontend tidak perlu dikirim ke backend.
              .filter((message) => message.id !== "assistant-welcome")
              .map((message) => ({
                role: message.role,
                content: message.content,
              })),
          },
          {
            onToken: (token) => {
              setMessages((currentMessages) =>
                currentMessages.map((message) => {
                  if (message.id !== assistantMessageId) {
                    return message;
                  }

                  return {
                    ...message,
                    content: message.content + token,
                  };
                }),
              );
            },
          },
        );

        return;
      }

      /**
       * MODE STREAM OFF
       * Jawaban AI muncul setelah response selesai.
       */
      const result = await sendChatMessage({
        message: content,
        sessionId,
      });

      setSessionId(result.sessionId);

      setMessages((current) => [
        ...current,
        {
          id: result.assistantMessage.id,
          role: "assistant",
          content: result.assistantMessage.content,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: nextId("assistant-error"),
          role: "assistant",
          content: fallbackReply,
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  return {
    input,
    isThinking,
    messages,
    setInput,
    handleSubmit,

    // Dipakai component untuk tombol Stream ON/OFF
    isStreamEnabled,
    setIsStreamEnabled,
  };
}