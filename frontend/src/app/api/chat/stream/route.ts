import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.text();

    const backendUrl = process.env.BACKEND_API_URL;

    if (!backendUrl) {
      return NextResponse.json(
        {
          message: "BACKEND_API_URL belum diset.",
        },
        { status: 500 },
      );
    }

    const response = await fetch(`${backendUrl}/chat/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
      cache: "no-store",
    });

    if (!response.body) {
      return NextResponse.json(
        {
          message: "Backend tidak mengirim stream.",
        },
        { status: 500 },
      );
    }

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch {
    return NextResponse.json(
      {
        message: "Gagal membuat proxy stream chatbot.",
      },
      { status: 500 },
    );
  }
}