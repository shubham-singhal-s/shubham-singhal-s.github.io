import type { GeminiChatMessage } from "@/types/ai";
import type { FC } from "react";
import { Message } from "./message";

export interface ChatProps {
  data: GeminiChatMessage[];
}

export const Chat: FC<ChatProps> = ({ data }) => {
  return (
    <div
      className="w-full flex p-4 flex-col gap-2 grow overflow-y-auto"
      style={{ maxHeight: "calc(100% - 96px)" }}
    >
      {data?.map(({ content, role }) => (
        <Message key={content + role} message={content} role={role} />
      ))}
    </div>
  );
};
