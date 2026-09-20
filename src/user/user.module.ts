import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { UserPrismaRepository } from './repository/prisma/user.prisma.repository.js';
import { UserRepository } from './repository/user.repository.js';

@Module({
  controllers: [UserController],
  providers: [UserService,{
    provide: UserRepository,
    useClass: UserPrismaRepository,
  }],
})
export class UserModule {}
 