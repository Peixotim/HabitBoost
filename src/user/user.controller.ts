import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserCreateDTO } from './DTOs/user-create.dto';
import { UserService } from './user.service';
import { UserUpdateDTO } from './DTOs/user-update.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  public async get(@Query('email') email: string) {
    if (email) {
      return await this.userService.getByEmail(email);
    }
    return await this.userService.getAll();
  }

  @Get(':uuid')
  @HttpCode(HttpStatus.OK)
  public async getById(
    @Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string,
  ) {
    return await this.userService.getById(uuid);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() request: UserCreateDTO) {
    return await this.userService.create({ ...request });
  }

  @Patch('/:uuid/enable')
  @HttpCode(HttpStatus.OK)
  public async enable(
    @Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string,
  ) {
    return await this.userService.enable(uuid);
  }

  @Patch('/:uuid/disable')
  @HttpCode(HttpStatus.OK)
  public async disable(
    @Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string,
  ) {
    return await this.userService.disable(uuid);
  }

  @Patch('/:uuid')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string,
    @Body() request: UserUpdateDTO,
  ) {
    return await this.userService.update(uuid, request);
  }

  @Delete('/:uuid')
  @HttpCode(HttpStatus.OK)
  public async delete(
    @Param('uuid', new ParseUUIDPipe({ version: '4' })) uuid: string,
  ) {
    return await this.userService.delete(uuid);
  }
}
