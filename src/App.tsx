
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConversationProvider } from "./contexts/ConversationContext";
import Landing from "./pages/Landing";
import { ConversationUI } from "./components/ConversationUI";
import PostConversation from "./pages/PostConversation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConversationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/chat" element={<ConversationUI />} />
            <Route path="/post-conversation" element={<PostConversation />} />
            <Route path="/signup" element={<Navigate to="/chat" />} />
            <Route path="/login" element={<Navigate to="/chat" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ConversationProvider>
  </QueryClientProvider>
);

export default App;
