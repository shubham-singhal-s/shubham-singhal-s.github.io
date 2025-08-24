import type { GeminiChatMessage } from "@/types/ai";
import { type FC, useEffect, useRef } from "react";
import { Message } from "./message";

export interface ChatProps {
  data: GeminiChatMessage[];
}

export const Chat: FC<ChatProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Always scroll to bottom when a new message is added
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [data?.length]);

  return (
    <div
      ref={containerRef}
      className="w-full flex p-4 flex-col gap-2 grow overflow-y-auto"
      style={{ maxHeight: "calc(100% - 96px)" }}
    >
      {data?.map(({ content, role }) => (
        <Message key={content + role} message={content} role={role} />
      ))}
    </div>
  );
};
