import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDTO } from 'src/dto/signin-user-dto';
import { UserRepository } from 'src/repository/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class SigninService {
    private AUDIENCE = 'users';
    private ISSUER = 'social-postify';

    constructor(
        private readonly userRepository: UserRepository,

        private readonly jwtService: JwtService,) { }

    async signin({ email, password }: SignInDTO) {
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw new HttpException('Invalid email', HttpStatus.UNAUTHORIZED);
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            throw new HttpException('Invalid email', HttpStatus.UNAUTHORIZED);
        }
        return this.createToken(user);
    }

    createToken(user: User) {
        const token = this.jwtService.sign(
            {
                name: user.name,
                email: user.email,
            },
            {
                expiresIn: '7 days',
                subject: String(user.id),
                issuer: this.ISSUER,
                audience: this.AUDIENCE,
            },
        );

        return { token };
    }

    checkToken(token: string) {
        try {
            const data = this.jwtService.verify(token, {
                issuer: this.ISSUER,
                audience: this.AUDIENCE,
            });

            return data;
        } catch (error) {
            console.log(error);
            throw new BadRequestException(error);
        }
    }
}
