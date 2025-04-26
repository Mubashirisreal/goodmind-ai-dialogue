
export type MessageType = "user" | "ai";

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
}
