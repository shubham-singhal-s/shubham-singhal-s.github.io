import { cn } from "@/lib/utils";
import { useMemo, type FC } from "react";

export interface MessageProps {
  message: string;
  role: "user" | "model";
}

export const Message: FC<MessageProps> = ({ message, role }) => {
  const isUser = useMemo(() => role === "user", [role]);
  return (
    <div
      className={cn("py-2 px-4 my-2 rounded-lg shadow-md w-fit max-w-[80%]", {
        "bg-black text-white self-end": isUser,
        "bg-gray-100 self-start": !isUser,
      })}
    >
      {message}
    </div>
  );
};
