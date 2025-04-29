"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAudio } from "@/hooks/useAudio";
import { Mic, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  content: string;
  role: "user" | "assistant";
};

export default function Home() {
  const {
    transcript,
    listening,
    startListening,
    stopListening,
    error,
    resetTranscript,
  } = useAudio();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Olá! Sou seu assistente literário. Como posso ajudar você com livros hoje?",
      role: "assistant",
    },
  ]);
  const [input, setInput] = useState("");

  // Referência para o container das mensagens
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Atualiza o input com a transcrição em tempo real
  useEffect(() => {
    setInput(transcript);
  }, [transcript]);

  // Efeito para scroll automático quando novas mensagens são adicionadas
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    resetTranscript();

    // Simula resposta da IA
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Obrigado pela sua mensagem sobre livros! Em uma implementação real, eu responderia com informações literárias relevantes.",
        role: "assistant",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
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
      // Se houver transcrição, coloca no input
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
              <span className="text-purple-600 font-bold">Chat</span>Book
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="flex items-start max-w-[80%]">
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 mr-2 bg-purple-600">
                      <AvatarImage src="image.png" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
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
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
