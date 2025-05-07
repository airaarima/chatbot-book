import fs from "fs";
import path from "path";

import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Carrega o conteúdo do livro em markdown
const livroMarkdown = fs.readFileSync(path.resolve(__dirname, "../contextos/livro.md"), "utf-8");

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
        content: `
Você é um assistente virtual especializado em conversar sobre livros. 
Seu tom é amigável, descontraído e você sempre responde com clareza e bom humor.

O usuário está lendo um livro e você deve responder baseado **apenas no conteúdo abaixo**, 
que é o conteúdo do livro em questão:

${livroMarkdown}
`,
      },

      {
        role: "system",
        content: "Responda sempre em português, não importa o idioma da pergunta.",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}
