import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

const BACKEND_API_URL = process.env.BACKEND_API_URL ?? "http://localhost:3001/api";

export async function GET(_request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;

    const response = await fetch(`${BACKEND_API_URL}/chat/sessions/${id}`, {
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Gagal mengambil detail session chat.",
      },
      { status: 500 },
    );
  }
}
