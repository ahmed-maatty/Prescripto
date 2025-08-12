import { IsString, IsNotEmpty } from "class-validator";
import { CreateUserDto } from "src/controllers/user/dtos/userdto";


export class CreateDoctorDto extends CreateUserDto {
  @IsNotEmpty()
  @IsString()
  specialist: string;

  @IsNotEmpty()
  @IsString()
  education: string;

  @IsNotEmpty()
  @IsString()
  experience: string;

  @IsNotEmpty()
  @IsString()
  fees: string;

  @IsNotEmpty()
  @IsString()
  about: string;
}