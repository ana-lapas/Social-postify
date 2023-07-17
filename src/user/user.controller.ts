import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/dto/create-user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
    addUser(@Body() body: CreateUserDTO){
      return this.userService.addUser(body);
    }
}
