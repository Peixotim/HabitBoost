import { Module } from '@nestjs/common';
import { ObjectiveRepository } from './objective.repository';
import { ObjectiveController } from './objective.controller';
import { ObjectiveService } from './objective.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Objective } from './model/objective.model';

@Module({
  controllers: [ObjectiveController],
  providers: [ObjectiveRepository, ObjectiveService],
  imports: [UserService, TypeOrmModule.forFeature([Objective])],
})
export class ObjectiveModule {}
