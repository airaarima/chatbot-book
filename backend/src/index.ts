import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userController from "./controllers/userController";
import groqController from "./controllers/groqController";
import { AppDataSource } from "./database/data-source";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const route = "/api/v1";
const PORT = process.env.PORT;

app.post(`${route}/message`, groqController.sendMessage);

app.post(`${route}/register`, userController.registerUser)

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
    process.exit(1);
  });