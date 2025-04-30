import express from 'express'
import { getGroqChatCompletion } from './services/groqService';
import dotenv from "dotenv";

dotenv.config();
const app = express()
app.use(express.json());

app.post('/api/message', async (req, res) => {
  try {
    const reply = await getGroqChatCompletion(req.body.message);
    res.json({ reply: reply.choices[0]?.message?.content });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT

app.listen(PORT, () => `Server running on port ${PORT}`)