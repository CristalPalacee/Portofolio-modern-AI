export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type SendChatMessageRequest = {
  message: string;
  sessionId?: string;
};

export type CreateChatSessionRequest = {
  title?: string;
};

export type BackendChatMessage = {
  id: string;
  sessionId: string;
  role: "USER" | "ASSISTANT" | "SYSTEM";
  content: string;
  model?: string | null;
  tokens?: number | null;
  createdAt?: string;
};

export type SendChatMessageResponse = {
  sessionId: string;
  userMessage: BackendChatMessage;
  assistantMessage: BackendChatMessage;
};

export type BackendChatSession = {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
  messages?: BackendChatMessage[];
};

export type StreamChatRequest = {
  messages: ApiChatMessage[];
};

export type ApiChatMessage = {
  role: ChatRole;
  content: string;
};