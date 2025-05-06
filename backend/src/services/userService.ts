import { IUser } from "../interfaces/IUser";
import userRepository from "../repositories/userRepository"

const createUser = async (user: IUser) => {
    const userExists = await userRepository.getUserByEmail(user.email);
    if(userExists) return { status: 409, message: "Erro ao criar usuário."};

    const newUser = await userRepository.createUser(user);
    return { status: 201, message: "Usuário criado com sucesso!"}
}

export default { createUser }