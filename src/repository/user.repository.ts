import { User } from "@prisma/client";
import { CreateUserDTO } from "src/dto/create-user-dto";

export abstract class UserRepository{
   abstract addUser(data: CreateUserDTO): Promise<void>;
   abstract findUserByEmail(email: string): Promise<User>;
}