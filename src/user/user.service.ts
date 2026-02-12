import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserCreateDTO } from './DTOs/user-create.dto';
import { ArgonService } from 'src/argon/argon.service';
import { UserUpdateDTO } from './DTOs/user-update.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly argonHash: ArgonService,
  ) {}

  public async getByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException(`User Not Found !`);
    }
    return user;
  }

  public async getAll() {
    return await this.userRepository.findAll();
  }

  public async getById(uuid: string) {
    const user = await this.userRepository.findById(uuid);

    if (!user) {
      throw new NotFoundException(`User Not Found`);
    }

    return user;
  }

  public async delete(uuid: string) {
    await this.getById(uuid);
    await this.userRepository.delete(uuid);
    return { message: `User deleted successfully ` };
  }

  public async create(request: UserCreateDTO) {
    if (!request) {
      throw new BadRequestException(`Error: the request came back empty.`);
    }

    const findUser = await this.userRepository.findByEmail(request.email);

    if (findUser) {
      throw new ConflictException(
        `Error: A user with this email address already exists! `,
      );
    }
    const passwordHashed = await this.argonHash.hashPassword(request.password);
    const newUser: UserCreateDTO = { ...request, password: passwordHashed };

    return await this.userRepository.create(newUser);
  }

  public async update(uuid: string, data: UserUpdateDTO) {
    const updateUser = await this.userRepository.update(uuid, data);

    if (!updateUser) {
      throw new NotFoundException(`User Not Found !`);
    }

    return updateUser;
  }

  public async disable(uuid: string) {
    await this.getById(uuid);
    await this.userRepository.disable(uuid);

    return { message: 'User deactivated successfully' };
  }

  public async enable(uuid: string) {
    await this.getById(uuid);
    await this.userRepository.enable(uuid);

    return { message: 'User activated successfully' };
  }
}
