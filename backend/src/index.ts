import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";

import groqController from "./controllers/groqController";
import loginController from "./controllers/loginController";
import userController from "./controllers/userController";
import { AppDataSource } from "./database/data-source";
import { CreateUserDto } from "./dtos/createUserDto";
import { LoginUserDto } from "./dtos/loginUserDto";
import { validateDto } from "./middlewares/validateDto";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const route = "/api/v1";
const PORT = process.env.PORT;

app.post(`${route}/message`, groqController.sendMessage);

app.post(`${route}/register`, validateDto(CreateUserDto), userController.registerUser);

app.post(`${route}/login`, validateDto(LoginUserDto), loginController.loginUser);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err: unknown) => {
    console.error("Error during Data Source initialization:", err);
    process.exit(1);
  });
