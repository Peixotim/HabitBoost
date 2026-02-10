import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './DTOs/user.create.dto';
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async findByMail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    if (!user) {
      return {};
    }
    return user;
  }

  public async create(data: UserCreateDTO) {
    const newUser = this.userRepository.create({ ...data });
    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  }
}
