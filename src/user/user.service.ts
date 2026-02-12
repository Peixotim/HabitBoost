import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserCreateDTO } from './DTOs/user-create.dto';
import { ArgonService } from 'src/argon/argon.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly argonHash: ArgonService,
  ) {}

  public async getAll() {
    const findAll = await this.userRepository.findAll();

    if (!findAll) {
      return [];
    }

    return findAll;
  }

  public async getById(uuid: string) {
    const user = await this.userRepository.findById(uuid);

    if (!user) {
      return null;
    }

    return user;
  }

  public async delete(uuid: string) {
    const result = await this.userRepository.delete(uuid);

    if (!result) {
      throw new NotFoundException(`User Not Found !`);
    }

    return { message: `User deleted successfully ` };
  }

  public async create(request: UserCreateDTO) {
    if (!request) {
      throw new BadRequestException(`Error: the request came back empty.`);
    }

    const findUser = await this.userRepository.findByMail(request.email);

    if (findUser) {
      throw new ConflictException(
        `Error: A user with this email address already exists! `,
      );
    }
    const passwordHashed = await this.argonHash.hashPassword(request.password);
    const newUser: UserCreateDTO = { ...request, password: passwordHashed };

    return await this.userRepository.create(newUser);
  }
}
