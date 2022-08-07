import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    // This allows for automatic validation and sends an error 400 + message for frontend to update
    @IsString()
    name: string;

    @IsEmail()
    email: string;
}