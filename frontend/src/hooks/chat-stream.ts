// src/features/chatbot/hooks/use-chatbot-stream.ts

"use client";

import { useCallback, useState } from "react";
import { sendChatMessage, streamChatMessage } from "@/lib/chatbot-api";
import { ChatMessage } from "@/types/chatbot";


export function useChatbotStream() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);

  // Toggle stream ON/OFF
  const [isStreamEnabled, setIsStreamEnabled] = useState(true);

  const sendMessage = useCallback(async () => {
    const userText = input.trim();

    if (!userText || isSending) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: userText,
    };

    const assistantMessageId = crypto.randomUUID();

    const assistantMessage: ChatMessage = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
    };

    const nextMessages = [...messages, userMessage];

    setMessages([...nextMessages, assistantMessage]);
    setInput("");
    setIsSending(true);

    try {
      // MODE STREAM ON
      if (isStreamEnabled) {
        await streamChatMessage(
          {
            messages: nextMessages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
          },
          {
            onToken: (token) => {
              setMessages((currentMessages) =>
                currentMessages.map((message) => {
                  if (message.id !== assistantMessageId) return message;

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

         const result = await sendChatMessage({
        message: userText,
        sessionId,
      });

      setSessionId(result.sessionId);
      setMessages((currentMessages) =>
        currentMessages.map((message) => {
          if (message.id !== assistantMessageId) return message;

          return {
            ...message,
            content: result.assistantMessage.content,
          };
        }),
      );

      // MODE STREAM OFF
      const assistantText = await result.assistantMessage?.content ?? "Maaf, saya belum bisa menjawab";

      setMessages((currentMessages) =>
        currentMessages.map((message) => {
          if (message.id !== assistantMessageId) return message;

          return {
            ...message,
            content: assistantText,
          };
        }),
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat menghubungi AI.";

      setMessages((currentMessages) =>
        currentMessages.map((message) => {
          if (message.id !== assistantMessageId) return message;

          return {
            ...message,
            content: errorMessage,
          };
        }),
      );
    } finally {
      setIsSending(false);
    }
  }, [input, isSending, isStreamEnabled, messages, sessionId]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await sendMessage();
    },
    [sendMessage],
  );

  return {
    messages,
    input,
    setInput,

    isSending,

    isStreamEnabled,
    setIsStreamEnabled,

    handleSubmit,
  };
}