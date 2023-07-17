import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from 'src/repository/user.repository';
import { PrismaUserRepository } from 'src/repository/implementations/prismaUser.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide: UserRepository,
    useClass: PrismaUserRepository
  }],
  exports: [UserRepository]
})
export class UserModule {}
