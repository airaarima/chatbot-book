import { sign } from "jsonwebtoken";

import userRepository from "../repositories/userRepository";

const loginUser = async (credentials: { email: string; password: string }) => {
  const user = await userRepository.getUserByEmail(credentials.email);

  if (!user) {
    return { status: 401, message: "Credenciais inválidas" };
  }

  const passwordMatch = credentials.password === user.password;

  if (!passwordMatch) {
    return { status: 401, message: "Credenciais inválidas" };
  }

  const token = sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: "1d" },
  );

  // Remover a senha antes de retornar
  const { ...userWithoutPassword } = user;

  return {
    status: 200,
    message: "Login realizado com sucesso",
    data: {
      user: userWithoutPassword,
      token,
    },
  };
};

export default { loginUser };
