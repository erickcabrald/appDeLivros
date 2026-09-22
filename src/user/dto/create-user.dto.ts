import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: 'Carlos',
    description: 'nome do usuario'
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string;

  @ApiProperty({
    example: 'carlosdam@gmail.com',
    description: 'e-mail do usuario'
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'jub83db3',
    description: 'senha do usuario'
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string

  @ApiProperty({
    example: '2000-10-28',
    description: 'data de nascimento'
  })
  @IsNotEmpty()
  @IsDateString()
  data_nascimento: string;
}
