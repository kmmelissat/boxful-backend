import { IsString, IsEmail, MinLength, IsDateString } from 'class-validator';

export class RegisterDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  gender: string;

  @IsDateString()
  birthDate: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @MinLength(6)
  password: string;
}
