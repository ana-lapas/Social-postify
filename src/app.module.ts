import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { SigninModule } from './signin/signin.module';

@Module({
  imports: [UserModule, PrismaModule, SigninModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
