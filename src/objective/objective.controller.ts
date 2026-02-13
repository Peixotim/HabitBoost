import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { ObjectiveCreateDTO } from './DTOs/objective-create.dto';
import { Objective } from './model/objective.model';

@Controller()
export class ObjectiveController {
  constructor(private readonly objectiveService: ObjectiveService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  public async getAll(): Promise<Objective[]> {
    return await this.objectiveService.getAll();
  }

  @Get('/:uuid')
  @HttpCode(HttpStatus.OK)
  public async getById(@Param('uuid') uuid: string): Promise<Objective> {
    return await this.objectiveService.getById(uuid);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() request: ObjectiveCreateDTO): Promise<Objective> {
    return await this.objectiveService.create(request);
  }
}
