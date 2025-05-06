import { RequestHandler } from "express";
import { getGroqChatCompletion } from "../services/groqService";

const sendMessage: RequestHandler = async (req, res, next) => {
  try {
    const userMessage = req.body.message;
    const reply = await getGroqChatCompletion(userMessage);
    res.json({ resposta: reply.choices[0]?.message?.content });
  } catch (err: any) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
};

export default { sendMessage }
