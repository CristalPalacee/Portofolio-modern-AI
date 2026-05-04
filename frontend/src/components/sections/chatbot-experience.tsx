"use client";

import {
  Bot,
  Heart,
  SendHorizontal,
  UserRound,
  Waves,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCurhatChat } from "@/hooks/use-curhat-chat";
import { cn } from "@/lib/utils";

export function ChatbotExperience() {
  const {
    handleSubmit,
    input,
    isThinking,
    messages,
    setInput,

    // State untuk toggle stream ON/OFF
    isStreamEnabled,
    setIsStreamEnabled,
  } = useCurhatChat();

  return (
    <section className="px-5 py-8 sm:px-8 lg:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/75 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <header className="border-b border-white/10 px-5 py-5 sm:px-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <Heart className="size-5" />
              </div>

              <div>
                <h1 className="text-base font-black text-white">
                  Ruang Curhat Anonymous
                </h1>

                <p className="text-xs leading-5 text-slate-400">
                  Tempat cerita ringan tanpa harus sempurna.
                </p>
              </div>
            </div>

            {/* Toggle Stream ON/OFF */}
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
              <div className="flex size-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                <Waves className="size-4" />
              </div>

              <div className="flex flex-col gap-1">
                <Label
                  htmlFor="stream-mode"
                  className="cursor-pointer text-xs font-semibold text-white"
                >
                  Stream Mode
                </Label>

                <p className="text-[11px] text-slate-500">
                  {isStreamEnabled
                    ? "Jawaban muncul bertahap."
                    : "Jawaban muncul setelah selesai."}
                </p>
              </div>

              <Switch
                id="stream-mode"
                checked={isStreamEnabled}
                disabled={isThinking}
                onCheckedChange={setIsStreamEnabled}
              />

              <span
                className={cn(
                  "w-8 text-xs font-black",
                  isStreamEnabled ? "text-cyan-200" : "text-slate-500",
                )}
              >
                {isStreamEnabled ? "ON" : "OFF"}
              </span>
            </div>
          </div>
        </header>

        {/* Status Mode */}
        <div className="border-b border-white/10 bg-white/[0.03] px-5 py-3 sm:px-7">
          <p className="text-xs leading-5 text-slate-400">
            {isStreamEnabled
              ? "Stream aktif: AI akan mengetik jawaban secara bertahap seperti ChatGPT."
              : "Stream nonaktif: AI akan menampilkan jawaban setelah proses selesai."}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-7">
          <div className="flex flex-col gap-5">
            {messages.length === 0 ? (
              <div className="flex gap-3">
                <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Bot className="size-4" />
                </div>

                <div className="max-w-[84%] rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-sm leading-7 text-slate-200 shadow-xl sm:max-w-[72%]">
                  Hai, kamu bisa mulai cerita dari hal yang paling mengganggu
                  pikiranmu hari ini.
                </div>
              </div>
            ) : null}

            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.role === "user" && "flex-row-reverse",
                )}
              >
                <div
                  className={cn(
                    "mt-1 flex size-9 shrink-0 items-center justify-center rounded-2xl",
                    message.role === "assistant"
                      ? "bg-cyan-300/10 text-cyan-200"
                      : "bg-white text-slate-950",
                  )}
                >
                  {message.role === "assistant" ? (
                    <Bot className="size-4" />
                  ) : (
                    <UserRound className="size-4" />
                  )}
                </div>

                <div
                  className={cn(
                    "max-w-[84%] rounded-[1.5rem] px-5 py-4 text-sm leading-7 shadow-xl sm:max-w-[72%]",
                    message.role === "assistant"
                      ? "border border-white/10 bg-white/[0.05] text-slate-200"
                      : "bg-white text-slate-950",
                  )}
                >
                  {message.content || "AI sedang mengetik..."}
                </div>
              </div>
            ))}

            {isThinking ? (
              <div className="flex gap-3">
                <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Bot className="size-4" />
                </div>

                <div className="flex items-center gap-2 rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-5 py-4">
                  <span className="size-2 animate-pulse rounded-full bg-cyan-200" />
                  <span className="size-2 animate-pulse rounded-full bg-cyan-200/70 [animation-delay:120ms]" />
                  <span className="size-2 animate-pulse rounded-full bg-cyan-200/40 [animation-delay:240ms]" />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-4 sm:px-7">
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-3 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/20"
          >
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={1}
              placeholder="Tulis curhatanmu di sini..."
              className="max-h-36 min-h-11 flex-1 resize-none bg-transparent px-3 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-500"
            />

            <button
              type="submit"
              disabled={!input.trim() || isThinking}
              aria-label="Kirim pesan"
              className="grid size-11 shrink-0 place-items-center rounded-2xl bg-cyan-300 text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-500"
            >
              <SendHorizontal className="size-5" />
            </button>
          </form>

          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            Ini ruang curhat demo, bukan pengganti bantuan profesional.
          </p>
        </div>
      </div>
    </section>
  );
}