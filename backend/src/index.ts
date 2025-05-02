import express from 'express'
import { getGroqChatCompletion } from './services/groqService';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express()
app.use(express.json());
app.use(cors());

app.post('/api/message', async (req, res) => {
  try {
    console.log("Request received:", req.body); // Adicione esta linha para verificar os dados que estão sendo recebidos
    const userMessage = req.body.pergunta;  // Pega a mensagem do usuário
    const reply = await getGroqChatCompletion(userMessage);
    res.json({ resposta: reply.choices[0]?.message?.content });
  } catch (err: any) {
    console.error("Error:", err);  // Adicione este log para saber mais sobre o erro
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT

app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));