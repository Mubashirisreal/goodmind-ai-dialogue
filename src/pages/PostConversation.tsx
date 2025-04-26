
export default function PostConversation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary/30 px-4 text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold text-secondary">
          Thank you for using our Conversational AI
        </h1>
        <p className="text-xl text-secondary/80">
          Visit goodmind.app to book a consultation
        </p>
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <p className="text-gray-700">
            Please note that this is an AI agent and not a real therapist. For serious
            issues, please consult a licensed therapist.
          </p>
        </div>
      </div>
    </div>
  );
}
