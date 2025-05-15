"use client";

import { ChatBookTitle } from "@/components/custom/ChatBookTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAudio } from "@/hooks/useAudio";
import { toastStyles } from "@/shared/constants/styles";
import useApiChatBook from "@/shared/services/requests/chat";
import { IMessage, ISendMessage } from "@/shared/services/requests/chat/types";
import { Loader, Mic, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { messages } from "@/shared/constants/messages";

const ChatBook = () => {
  const {
    transcript,
    listening,
    startListening,
    stopListening,
    error,
    resetTranscript,
  } = useAudio();

  const [communications, setCommunications] = useState<IMessage[]>([
    {
      id: "1",
      content:
        "Olá! Sou seu assistente literário. Como posso ajudar você com livros hoje?",
      role: "assistant",
    },
  ]);
  const [input, setInput] = useState("");

  const { mutateChat, loading } = useApiChatBook();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInput(transcript);
  }, [transcript]);

  useEffect(() => {
    scrollToBottom();
  }, [communications]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: IMessage = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    };

    const sendMessage: ISendMessage = {
      message: userMessage.content,
    };

    setCommunications((prev) => [...prev, userMessage]);
    setInput("");
    resetTranscript();

    const response = await mutateChat(sendMessage, (errorMessage) => {
      toast.error(errorMessage || messages.error.default, toastStyles.error);
    });

    if (response) setCommunications((prev) => [...prev, response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMicrophone = () => {
    if (listening) {
      stopListening();
      if (transcript) {
        setInput(transcript);
      }
    } else {
      resetTranscript();
      startListening();
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-3xl h-[80vh] flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="text-center text-xl">
              <ChatBookTitle />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {communications.map((comunication) => (
              <div
                key={comunication.id}
                className={`flex ${comunication.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="flex items-start max-w-[80%]">
                  {comunication.role === "assistant" && (
                    <Avatar className="h-8 w-8 mr-2 bg-purple-600">
                      <AvatarImage src="image.png" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      comunication.role === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {comunication.content}
                  </div>
                  {comunication.role === "user" && (
                    <Avatar className="h-8 w-8 ml-2 bg-gray-400">
                      <span className="text-xs font-bold text-white">EU</span>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
            {/* Elemento invisível para scroll automático */}
            <div ref={messagesEndRef} />
          </CardContent>
          <div className="p-4 border-t">
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <div className="flex items-center space-x-2">
              <Button
                variant={listening ? "destructive" : "outline"}
                size="icon"
                onClick={toggleMicrophone}
                className="rounded-full"
              >
                <Mic className={listening ? "animate-pulse" : ""} />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  listening ? "Ouvindo..." : "Pergunte sobre livros..."
                }
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim()}
                size="icon"
                className="rounded-full bg-purple-600 hover:bg-purple-700"
              >
                {loading ? (
                  <Loader className="animate-spin w-4 h-4" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ChatBook;
