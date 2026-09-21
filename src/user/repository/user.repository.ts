import { CreateUserDto } from "../dto/create-user.dto.js";
import { ResponseUserDto } from "../dto/response-user.dto.js";

export abstract class UserRepository {
  abstract createUser(data: CreateUserDto): Promise<void>;

  abstract getAllUser(): Promise<ResponseUserDto[]>

  abstract getById(id: string): Promise< ResponseUserDto | null>

  abstract deleteUser(id: string): Promise<void>;
}