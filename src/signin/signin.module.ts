import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';
import { UserRepository } from 'src/repository/user.repository';
import { PrismaUserRepository } from 'src/repository/implementations/prismaUser.repository';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET,
  })],
  controllers: [SigninController],
  providers: [SigninService, UserService, {
    provide: UserRepository,
    useClass: PrismaUserRepository
  }]
})
export class SigninModule {}
