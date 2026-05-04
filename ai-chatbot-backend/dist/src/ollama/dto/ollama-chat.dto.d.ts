export type OllamaMessageRole = 'system' | 'user' | 'assistant';
export type OllamaMessage = {
    role: OllamaMessageRole;
    content: string;
};
export declare class OllamaChatDto {
    model: string;
    messages: OllamaMessage[];
    stream: boolean;
}
