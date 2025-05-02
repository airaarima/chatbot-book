import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getGroqChatCompletion(message: string) {
  console.log("Message received by getGroqChatCompletion:", message);
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message,
      },
      {
        role: "system",
        content: "Responda sempre em português, não importa o idioma da pergunta."
      }
    ],
    model: "llama-3.3-70b-versatile",
  });
}
