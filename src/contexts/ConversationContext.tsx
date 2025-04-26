
import React, { createContext, useContext, useState } from "react";
import { Message } from "@/types/message";

interface ConversationContextType {
  messages: Message[];
  addMessage: (content: string, type: "user" | "ai") => void;
  isCallActive: boolean;
  toggleCall: () => void;
  isProcessing: boolean;
  setIsProcessing: (value: boolean) => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export function ConversationProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const addMessage = (content: string, type: "user" | "ai") => {
    const newMessage: Message = {
      id: Math.random().toString(36).substring(7),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const toggleCall = () => {
    setIsCallActive((prev) => !prev);
  };

  return (
    <ConversationContext.Provider
      value={{
        messages,
        addMessage,
        isCallActive,
        toggleCall,
        isProcessing,
        setIsProcessing,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error("useConversation must be used within a ConversationProvider");
  }
  return context;
};
