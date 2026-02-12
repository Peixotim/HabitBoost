import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserCreateDTO } from './DTOs/user-create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() request: UserCreateDTO) {
    return await this.userService.create({ ...request });
  }
}
