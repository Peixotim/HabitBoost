import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRegisterDTO } from './DTOs/auth-register.dto';
import { UserService } from 'src/user/user.service';
import { ArgonService } from 'src/argon/argon.service';
import { AuthLoginDTO } from './DTOs/auth-login.dto';
import { PayloadType } from './template/auth-template-payload';
import { User } from 'src/user/model/user.model';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly argonService: ArgonService,
  ) {}

  public async register(request: AuthRegisterDTO) {
    const newUser = await this.userService.create(request);
    const generateToken = this.generateToken(newUser);

    return generateToken;
  }

  public async login(request: AuthLoginDTO) {
    const user = await this.userService.getByEmail(request.email);

    const verifyPassword = await this.argonService.verifyPassword(
      user.password,
      request.password,
    );

    if (verifyPassword == false) {
      throw new UnauthorizedException(`Credentials Invalid`);
    }

    const payload: PayloadType = {
      id: user.id,
      username: user.name,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private generateToken(user: User) {
    const payload: PayloadType = {
      id: user.id,
      username: user.name,
      email: user.email,
    };

    const generateToken = this.jwtService.sign(payload);

    return {
      access_token: generateToken,
      userInfo: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
