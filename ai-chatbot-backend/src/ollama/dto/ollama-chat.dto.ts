export type OllamaMessageRole = 'system' | 'user' | 'assistant';

export type OllamaMessage = {
  role: OllamaMessageRole;
  content: string;
};

export class OllamaChatDto {
  model!: string;
  messages!: OllamaMessage[];
  stream = false;
}
