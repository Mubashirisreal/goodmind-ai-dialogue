import { useRef, useEffect } from "react";
import { useConversation } from "@/contexts/ConversationContext";
import { MessageBubble } from "./MessageBubble";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function ConversationUI() {
  const { messages, isCallActive, toggleCall, isProcessing } = useConversation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-primary/10">
      <header className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-secondary text-xl font-semibold text-center">
          GoodMind AI
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="container max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isProcessing && (
            <div className="flex gap-1 mt-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-.3s]" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-.5s]" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 p-4">
        <div className="container max-w-4xl mx-auto flex justify-center items-center">
          <Button
            variant="default"
            size="lg"
            onClick={toggleCall}
            className="bg-territory hover:bg-territory/90 text-territory-foreground font-semibold px-8 py-6 rounded-full flex items-center gap-2"
          >
            {isCallActive ? (
              <>
                <MicOff className="w-5 h-5" />
                End Call
              </>
            ) : (
              <>
                <Mic className={cn("w-5 h-5", isCallActive && "animate-pulse")} />
                Start Call
              </>
            )}
          </Button>
        </div>
      </footer>
    </div>
  );
}
