import { Repository, DeepPartial } from 'typeorm';
import { Objective } from './model/objective.model';

import { InjectRepository } from '@nestjs/typeorm';

export class ObjectiveRepository {
  constructor(
    @InjectRepository(Objective)
    private readonly objectiveRepository: Repository<Objective>,
  ) {}

  public async create(data: DeepPartial<Objective>) {
    const request = this.objectiveRepository.create({
      ...data,
    });
    const newObjective = await this.objectiveRepository.save(request);
    return newObjective;
  }
}
