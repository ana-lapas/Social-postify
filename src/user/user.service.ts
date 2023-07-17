import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/create-user-dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async addUser(data: CreateUserDTO) {
        const saltOrRounds = 10;
        const hashPassword = bcrypt.hashSync(data.password, saltOrRounds);
        const user = await this.userRepository.findUserByEmail(data.email);
        if (user) {
            throw new HttpException('Invalid email', HttpStatus.CONFLICT);
        }
        await this.userRepository.addUser({...data, password: hashPassword});
    }
}

