import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../entities/user";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5430,
  username: "postgres",
  password: "root",
  database: "chatbotdb",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./src/database/migration/*.ts"],
  subscribers: [],
});
