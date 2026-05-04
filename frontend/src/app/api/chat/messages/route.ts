import { NextResponse } from "next/server";

import type { SendChatMessageRequest } from "@/types/chatbot";

const BACKEND_API_URL = process.env.BACKEND_API_URL ?? "http://localhost:3001/api";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as SendChatMessageRequest;

    const response = await fetch(`${BACKEND_API_URL}/chat/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Gagal mengirim pesan ke AI chatbot backend.",
      },
      { status: 500 },
    );
  }
}
