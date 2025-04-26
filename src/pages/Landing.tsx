
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary/30 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-secondary">
          Welcome to GoodMind's Conversational AI
        </h1>
        <p className="text-gray-600 mt-2">
          Connect with our AI assistant for a supportive conversation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white px-8">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
            <Link to="/login">Log In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
