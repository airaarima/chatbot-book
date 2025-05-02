import express from "express";
import { getGroqChatCompletion } from "./services/groqService";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/message", async (req, res) => {
  try {
    const userMessage = req.body.pergunta;
    const reply = await getGroqChatCompletion(userMessage);
    res.json({ resposta: reply.choices[0]?.message?.content });
  } catch (err: any) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
