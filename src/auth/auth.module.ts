import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { configDotenv } from 'dotenv';
import { ArgonModule } from 'src/argon/argon.module';
configDotenv({ path: '.env' });

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    UserModule,
    ArgonModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
