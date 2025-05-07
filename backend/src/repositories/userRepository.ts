import { User } from "../entities/user";
import { IUser } from "../interfaces/IUser";
import { AppDataSource } from "../database/data-source";

const userRepository = AppDataSource.getRepository(User);

const getUserByEmail = (userEmail: string): Promise<IUser | null> => {
    return userRepository.findOneBy({email: userEmail});
}

const createUser = (user: IUser) => {
    return userRepository.save(user);
}

export default { getUserByEmail, createUser }