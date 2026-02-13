import { Repository, DeepPartial } from 'typeorm';
import { Objective } from './model/objective.model';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
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

  public async findById(uuid: string) {
    return await this.objectiveRepository.findOne({
      where: { id: uuid },
    });
  }

  public async findAll() {
    return await this.objectiveRepository.find();
  }
}
