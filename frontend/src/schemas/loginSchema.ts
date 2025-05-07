import { z } from "zod";
import { emailField, loginPassword } from "./fields";

export const loginSchema = z.object({
  email: emailField,
  password: loginPassword,
});

export type LoginFormData = z.infer<typeof loginSchema>;
