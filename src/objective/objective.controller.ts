import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ObjectiveService } from './objective.service';

@Controller()
export class ObjectiveController {
  constructor(private readonly objectiveService: ObjectiveService) {}

  @Get('/:uuid')
  @HttpCode(HttpStatus.OK)
  public async getById(@Param('uuid') uuid: string) {
    return await this.objectiveService.getById(uuid);
  }
}
