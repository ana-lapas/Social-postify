import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SignInDTO } from 'src/dto/signin-user-dto';

@Controller('signin')
export class SigninController {
    constructor(private readonly signinService: SigninService) { }

    @Post()
    async loginUser(@Body() body: SignInDTO) {
        return this.signinService.signin(body);
    }
}
