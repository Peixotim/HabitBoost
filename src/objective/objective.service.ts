import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ObjectiveRepository } from './objective.repository';
import { ObjectiveCreateDTO } from './DTOs/objective-create.dto';
import { Objective } from './model/objective.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ObjectiveService {
  constructor(
    private readonly objectiveRepository: ObjectiveRepository,
    private readonly userService: UserService,
  ) {}

  public async create(data: ObjectiveCreateDTO): Promise<Objective> {
    if (!data) {
      throw new BadRequestException(`Error payload is empty !`);
    }

    const user = await this.userService.getById(data.userId);

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return this.objectiveRepository.create({
      ...data,
      user: user,
    });
  }
}
