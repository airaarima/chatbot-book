import { z } from "zod";

export const emailField = z
  .string()
  .min(1, "E-mail é obrigatório")
  .email("E-mail inválido");

export const passwordField = z
  .string()
  .min(6, "A senha deve ter no mínimo 6 caracteres")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])/,
    "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais",
  );

export const nameField = z.string().min(1, "Nome é obrigatório");

export const loginPassword = z.string().min(1, "Senha é obrigatória");
