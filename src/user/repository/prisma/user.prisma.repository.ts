import { Injectable } from "@nestjs/common";
import { UserRepository } from "../user.repository.js";
import { CreateUserDto } from "../../dto/create-user.dto.js";
import { PrismaService } from "../../../prisma/prisma.service.js";
import { ResponseUserDto } from "../../dto/response-user.dto.js";

@Injectable()
export class UserPrismaRepository implements UserRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // create user
  async createUser(data: CreateUserDto): Promise<void> {
    await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        data_nascimento: data.data_nascimento,
      },
    });
  }

  async getAllUser(): Promise<ResponseUserDto[]> {
    const users = await this.prisma.user.findMany();

    // retornando os dados do usuario de acordo com o ResponseUserDto
    // ultilizando o metodo map para retornar todos os usuarios
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      data_nascimento: user.data_nascimento,
    }));
  }

  async getById(id: string): Promise<ResponseUserDto | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    // verificando se o usuario existe
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      data_nascimento: user.data_nascimento,
    };
  }

  async deleteUser(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}