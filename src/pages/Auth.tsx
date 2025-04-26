
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (isLogin: boolean) => {
    try {
      setLoading(true);
      const authFunction = isLogin
        ? supabase.auth.signInWithPassword
        : supabase.auth.signUp;

      const { error } = await authFunction({ email, password });

      if (error) throw error;

      if (!isLogin) {
        toast.success("Signup successful! Please check your email to confirm your account.");
      } else {
        toast.success("Successfully logged in!");
        navigate("/chat");
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-secondary">Welcome to GoodMind AI</h1>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-4">
            <Button
              className="flex-1"
              onClick={() => handleAuth(true)}
              disabled={loading}
            >
              Log In
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => handleAuth(false)}
              disabled={loading}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
