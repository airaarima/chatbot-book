import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import groqController from "./controllers/groqController";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const route = "/api/v1";

app.post(`${route}/message`, groqController.sendMessage);


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
