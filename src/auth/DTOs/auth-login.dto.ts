import { IsEmail, IsString, MaxLength } from 'class-validator';

export class AuthLoginDTO {
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MaxLength(255)
  password: string;
}
