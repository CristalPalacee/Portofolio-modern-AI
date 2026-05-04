import type {
  BackendChatSession,
  ChatMessage,
  CreateChatSessionRequest,
  SendChatMessageRequest,
  SendChatMessageResponse,
  StreamChatRequest,
} from "@/types/chatbot";

const CHATBOT_API_URL =
  process.env.NEXT_PUBLIC_CHATBOT_PROXY_URL ?? "/api";

export async function createChatSession(
  payload: CreateChatSessionRequest = {},
): Promise<BackendChatSession> {
  const response = await fetch(`${CHATBOT_API_URL}/chat/sessions/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Gagal membuat session chat.");
  }

  return response.json() as Promise<BackendChatSession>;
}

export async function getChatSessions(): Promise<BackendChatSession[]> {
  const response = await fetch(`${CHATBOT_API_URL}/chat/sessions/`);

  if (!response.ok) {
    throw new Error("Gagal mengambil daftar session chat.");
  }

  return response.json() as Promise<BackendChatSession[]>;
}

export async function getChatSessionById(
  sessionId: string,
): Promise<BackendChatSession> {
  const response = await fetch(`${CHATBOT_API_URL}/chat/sessions/${sessionId}/`);

  if (!response.ok) {
    throw new Error("Gagal mengambil detail session chat.");
  }

  return response.json() as Promise<BackendChatSession>;
}

export async function sendChatMessage(
  payload: SendChatMessageRequest,
): Promise<SendChatMessageResponse> {
  const response = await fetch(`${CHATBOT_API_URL}/chat/message/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Gagal menghubungi AI chatbot backend.");
  }

  return response.json() as Promise<SendChatMessageResponse>;
}




type StreamChatOptions = {
  onToken: (token: string) => void;
  onDone?: () => void;
};

export async function streamChatMessage(
  payload: StreamChatRequest,
  options: StreamChatOptions,
) {
  const response = await fetch("/api/chat/stream/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Gagal menghubungi stream chatbot.");
  }

  if (!response.body) {
    throw new Error("Response stream kosong.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    buffer += decoder.decode(value, {
      stream: true,
    });

    const events = buffer.split("\n\n");

    buffer = events.pop() ?? "";

    for (const event of events) {
      const dataLine = event
        .split("\n")
        .find((line) => line.startsWith("data: "));

      if (!dataLine) continue;

      const jsonText = dataLine.replace("data: ", "");

      const data = JSON.parse(jsonText) as {
        token?: string;
        done?: boolean;
        error?: string;
      };

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.token) {
        options.onToken(data.token);
      }

      if (data.done) {
        options.onDone?.();
      }
    }
  }
}