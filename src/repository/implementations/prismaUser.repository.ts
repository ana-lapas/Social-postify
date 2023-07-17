import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from 'src/dto/create-user-dto';
import { User } from 'src/entity/User';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaUserRepository {
    constructor(private readonly prisma: PrismaService) { }
    async addUser(data: CreateUserDTO) {
        return await this.prisma.user.create({ data: data });
    }

    async findUserByEmail(email: string) {
        return await this.prisma.user.findUnique({
            where:{ email }
        })
    }
}