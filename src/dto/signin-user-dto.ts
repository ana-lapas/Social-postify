import { IsNotEmpty, IsString } from "class-validator";

export class SignInDTO {
    @IsString()
    @IsNotEmpty()
    "email": string;

    @IsString()
    @IsNotEmpty()
    "password": string;
}