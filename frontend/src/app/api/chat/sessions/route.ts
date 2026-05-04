import { NextResponse } from "next/server";

import type { CreateChatSessionRequest } from "@/types/chatbot";

const BACKEND_API_URL = process.env.BACKEND_API_URL ?? "http://localhost:3001/api";

export async function GET() {
  try {
    const response = await fetch(`${BACKEND_API_URL}/chat/sessions`, {
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Gagal mengambil session chat.",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateChatSessionRequest;

    const response = await fetch(`${BACKEND_API_URL}/chat/sessions`, {
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
        message: "Gagal membuat session chat.",
      },
      { status: 500 },
    );
  }
}
