import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class UserCreateDTO {
  @IsString({ message: 'Name must be a valid text.' })
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'Email must be a valid email address.' })
  @MaxLength(255)
  @IsNotEmpty()
  email: string;

  @IsString({ message: 'Password must be a valid text.' })
  @MaxLength(255)
  @IsNotEmpty()
  password: string;

  @IsNumber()
  score: number = 0;
}
