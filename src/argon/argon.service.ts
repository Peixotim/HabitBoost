import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class ArgonService {
  public async hashPassword(password: string): Promise<string> {
    if (!password) {
      throw new BadRequestException('Password must not be empty');
    }

    try {
      return await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 16,
        timeCost: 3,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Error processing password hash ${error}`,
      );
    }
  }

  public async verifyPassword(
    passwordHashed: string,
    password: string,
  ): Promise<boolean> {
    if (!passwordHashed || !password) {
      return false;
    }

    try {
      return await argon2.verify(passwordHashed, password);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
