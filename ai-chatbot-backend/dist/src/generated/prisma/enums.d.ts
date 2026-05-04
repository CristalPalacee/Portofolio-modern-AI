export declare const MessageRole: {
    readonly USER: "USER";
    readonly ASSISTANT: "ASSISTANT";
    readonly SYSTEM: "SYSTEM";
};
export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole];
