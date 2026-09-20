import { Injectable } from "@nestjs/common";
import { UserRepository } from "../user.repository.js";

@Injectable()
export class UserPrismaRepository implements UserRepository {

}