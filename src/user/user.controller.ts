import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseUserDto } from './dto/response-user.dto.js';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Inicio metodo post
  @Post()
  @ApiOperation({
  summary: 'Criar usuário',
  })
  @ApiResponse({
  status: 201,
  description: 'Usuário criado com sucesso.',
  })
  @ApiResponse({
    status: 409,
    description: 'E-mail já cadastrado em outra conta.',
  })
  @ApiResponse({
    status: 500,
    description: 'Não foi possível criar o usuário.',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //  Fim metodo Post --------------------------------------------------------------------------------------------------
  // inicio metodo get All
  @Get()
  @ApiOperation({
    summary: 'Listar os usuarios'
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso.',
    type: ResponseUserDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não existe.',
  })
  @ApiResponse({
    status: 500,
    description: 'Não foi possível buscar usuário.',
  })
  findAll() {
    return this.userService.getAllUser();
  }

  // fim Metodo get All ------------------------------------------------------------------------------------------------

  // Inicio metodo get by id
  @Get(':id')
  @ApiOperation({
    summary: 'Buscar usuário por ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso.',
    type: ResponseUserDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não existe.',
  })
  @ApiResponse({
    status: 500,
    description: 'Não foi possível buscar usuário.',
  })
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  // Fim metodo get by id ----------------------------------------------------------------------------------------------

}
