import { IsNotEmpty, IsString, IsEmail, IsEnum, IsDateString , IsOptional } from "class-validator";

enum Gender {
  Male = "Male",
  Female = "Female"
}

enum Role {
  Patient = "Patient",
  Doctor = "Doctor",
  Admin = "Admin"
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender
  @IsEnum(Role)
  role: Role = Role.Patient
  @IsString()
  phone: string
  @IsDateString()
  birthdate: Date
}

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string
}

export class EditDto {
  @IsOptional()
  username?: string;
  @IsOptional()
  email?: string;
  @IsOptional()
  password?: string;
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
  @IsOptional()
  phone?: string;
  @IsOptional()
  birthdate?: Date;
}