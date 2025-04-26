
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConversationProvider } from "./contexts/ConversationContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthGuard } from "./components/AuthGuard";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import { ConversationUI } from "./components/ConversationUI";
import PostConversation from "./pages/PostConversation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ConversationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<Auth />} />
              <Route
                path="/chat"
                element={
                  <AuthGuard>
                    <ConversationUI />
                  </AuthGuard>
                }
              />
              <Route
                path="/post-conversation"
                element={
                  <AuthGuard>
                    <PostConversation />
                  </AuthGuard>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ConversationProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
