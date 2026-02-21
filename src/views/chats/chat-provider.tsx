import type { GeminiChatMessage } from "@/types/ai";
import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

export interface ChatProviderProps {
  children: ReactNode;
}

export interface ChatContextType {
  messages: GeminiChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<GeminiChatMessage[]>>;
}

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined,
);

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<GeminiChatMessage[]>([]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within ChatProvider");
  }
  return context;
};
