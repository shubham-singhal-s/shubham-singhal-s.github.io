import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { cn } from "@/lib/utils";
import { useSendChatMutation } from "@/redux/queries/cv-api-query";
import { markForReset } from "@/redux/reducers/turnstile";
import type { GeminiChatMessage } from "@/types/ai";
import { BrushCleaning, Loader, Send } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { Chat } from "./chats/chat";
import { Introduction } from "./chats/introduction";

export const Home = () => {
  const [sendChat, { data, isLoading, error, reset }] = useSendChatMutation();
  const [showShadow, setShowShadow] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<GeminiChatMessage[]>([]);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const dispatch = useDispatch();
  const { token } = useSelector((state: any) => state.turnstile);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setMessages((m) => [...m, ...data]);
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      setMessages((prev) => {
        if (prev.length === 0) return prev;
        const last = prev[prev.length - 1];
        if (last.role === "user") {
          setValue(last.content || "");
          return prev.slice(0, -1);
        }
        return prev;
      });
    }
  }, [error]);

  const hasMessages = useMemo(() => messages?.length > 0, [messages]);

  const loading = useMemo(
    () => isLoading || token === "EMPTY",
    [isLoading, token]
  );

  const onHeightChange = (height: number) => {
    if (height >= 162) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };

  const enterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!token || token === "EMPTY") return;
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const submit = async () => {
    if (loading || !token) return;
    if (value.trim() === "") return;

    const latestMessages = [
      ...messages,
      { role: "user" as "user", content: value },
    ];
    const request = {
      messages: latestMessages,
    };
    setMessages(latestMessages);
    dispatch(markForReset());
    setValue("");
    await sendChat({ data: request, token });
  };

  const clear = () => {
    setValue("");
    setShowShadow(false);
    setMessages([]);
    reset();
  };

  const onFocus = useCallback(() => {
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, [inputRef]);

  return (
    <div
      className={cn("flex flex-col items-center h-screen w-full", {
        "justify-center": !hasMessages,
        "justify-start": hasMessages && !isLoading,
      })}
      style={{ maxHeight: "calc(100vh - 28px)" }}
    >
      {!hasMessages && <Introduction />}
      <TextareaAutosize
        ref={inputRef}
        onHeightChange={onHeightChange}
        onFocus={onFocus}
        className={cn(
          "border-0 border-b-2 border-b-gray-300 rounded-none",
          "p-2 mb-4 focus:border-b-gray-900 focus:outline-none w-[90%]",
          {
            "inset-shadow-sm": showShadow,
          }
        )}
        placeholder={"Ask me anything..."}
        maxRows={6}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={enterPress}
      />
      <div
        className={cn(
          "pb-2 flex flex-row items-center gap-4 justify-center w-full",
          { "border-b-1": hasMessages }
        )}
      >
        <Button
          variant="ghost"
          className="rounded-none"
          disabled={loading}
          onClick={clear}
        >
          {loading ? <Loader className="animate-spin" /> : <BrushCleaning />}
          Clear
        </Button>
        <Button
          className="rounded-none"
          disabled={loading || !token}
          onClick={submit}
        >
          Submit
          {loading ? <Loader className="animate-spin" /> : <Send />}
        </Button>
      </div>
      {error && (
        <div className="text-red-500 mt-2">{getErrorMessage(error)}</div>
      )}
      {!token && (
        <div className="text-red-500 mt-2">
          Chat feature is currently unable as your browser failed to verify.
        </div>
      )}
      {hasMessages && <Chat data={messages} />}
    </div>
  );
};
