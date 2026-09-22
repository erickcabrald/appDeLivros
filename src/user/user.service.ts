import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserRepository } from './repository/user.repository.js';
import { ResponseUserDto } from './dto/response-user.dto.js';

@Injectable()
export class UserService {

  constructor(
    private readonly userRepository: UserRepository,
  ){}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      await this.userRepository.createUser(createUserDto);
    } catch (error: unknown) {

      if (
          typeof error === 'object' && // verificando se error é um objeto
          error !== null && // verificando se error nã é um objeto nulo
          'code' in error  && // verificando se code esta no objeto error
          error.code === 'P2002' // verificando se error.code é igual a P2002 -> condigo que prisma retorna em caso de dados unicos iguais
      ) {
        throw new ConflictException('E-mail já cadrastado em outra conta');
      }
      console.error(error)
      throw new InternalServerErrorException('Não foi possivel criar o usuario');
    }
  }

  async getAllUser(): Promise<ResponseUserDto[]> {
    
    try {
      const users = await this.userRepository.getAllUser();

      return users;
    } catch (error) {
      throw new InternalServerErrorException('Não foi possivel buscar usuarios');
    }

  }

  async getById(id: string): Promise< ResponseUserDto | null> {
    try {
      const user = await this.userRepository.getById(id);
      if (!user) {
        throw new NotFoundException('usuário não existe');
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Não foi possivel buscar usuario');
    }
  }
}
