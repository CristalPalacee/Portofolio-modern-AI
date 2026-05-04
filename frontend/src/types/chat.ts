export type ChatRole = "user" | "assistant" | "system";

export type ChatMessage = {
  id?: string;
  role: ChatRole;
  content: string;
  createdAt?: string;
};



export type ApiResponse<T = unknown> = {
  success?: boolean;
  message?: string;
  data?: T;
};

export type ChatSession = {
  id: string;
  title?: string;
  messages?: ChatMessage[];
  createdAt?: string;
  updatedAt?: string;
};

export type CreateChatSessionPayload = {
  title?: string;
};


export type SendMessagePayload = {
  sessionId: string;
  content: string;
};

export type SendMessageResponse = {
  message?: string;
  content?: string;
  answer?: string;
  response?: string;
};