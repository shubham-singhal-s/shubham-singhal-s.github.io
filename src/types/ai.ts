export type GeminiChatMessage = {
  role: "user" | "model";
  content: string;
};

export type GeminiChatRequest = {
  messages: GeminiChatMessage[];
};
