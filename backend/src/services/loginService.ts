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

  // Remover a senha antes de retornar
  const { ...userWithoutPassword } = user;

  return {
    status: 200,
    message: "Login realizado com sucesso",
    data: {
      user: userWithoutPassword,
    },
  };
};

export default { loginUser };
