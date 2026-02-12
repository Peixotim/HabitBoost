import { InjectRepository } from '@nestjs/typeorm';
import { User } from './model/user.model';
import { DeepPartial, Repository } from 'typeorm';
import { UserCreateDTO } from './DTOs/user-create.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    return user;
  }

  public async create(data: UserCreateDTO) {
    const newUser = this.userRepository.create({ ...data });
    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  }

  public async findAll() {
    return await this.userRepository.find();
  }

  public async findById(uuid: string) {
    return await this.userRepository.findOne({
      where: { id: uuid },
    });
  }

  public async disable(uuid: string) {
    await this.userRepository.update(uuid, { isActive: false });
  }

  public async enable(uuid: string) {
    await this.userRepository.update(uuid, { isActive: true });
  }

  public async update(uuid: string, data: DeepPartial<User>) {
    const user = await this.findById(uuid);

    if (!user) {
      return null;
    }

    this.userRepository.merge(user, data);

    return this.userRepository.save(user);
  }

  public async delete(uuid: string) {
    return await this.userRepository.delete({ id: uuid });
  }
}
