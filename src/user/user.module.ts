import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { UserRepository } from './user.repository';
import { ArgonModule } from 'src/argon/argon.module';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  imports: [TypeOrmModule.forFeature([User]), ArgonModule],
})
export class UserModule {}
