import { cn } from "@/lib/utils";
import { useMemo, type FC } from "react";
import ReactMarkdown from "react-markdown";
import { MessageLink } from "./message-link";

export interface MessageProps {
  message: string;
  role: "user" | "model";
}

export const Message: FC<MessageProps> = ({ message, role }) => {
  const isUser = useMemo(() => role === "user", [role]);
  return (
    <div
      className={cn(
        "py-2 px-4 my-2 rounded-lg shadow-md w-fit max-w-[80%] last:pb-4",
        {
          "bg-primary text-primary-foreground self-end": isUser,
          "bg-muted text-foreground self-start": !isUser,
        },
      )}
    >
      {isUser ? (
        <span className="whitespace-pre-wrap text-sm">{message}</span>
      ) : (
        <ReactMarkdown components={{ a: MessageLink }}>{message}</ReactMarkdown>
      )}
    </div>
  );
};
