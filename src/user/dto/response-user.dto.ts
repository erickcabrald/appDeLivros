import { ApiProperty } from "@nestjs/swagger";


export class ResponseUserDto {
  @ApiProperty({
    example: 'fm3if439fhf4nuekjjdjdd',
    description: 'id do usuario em formato uuid'
  })
  id: string;

  @ApiProperty({
    example: 'Carlos',
    description: 'nome do usuario'
  })
  name: string

   @ApiProperty({
    example: 'carlosdam@gmail.com',
    description: 'e-mail do usuario'
  })
  email: string;


    @ApiProperty({
    example: '2000-10-28',
    description: 'data de nascimento'
  })
  data_nascimento: string;
}