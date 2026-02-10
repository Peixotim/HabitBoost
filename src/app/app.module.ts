import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import { UserModule } from 'src/user/user.module';
import { ArgonModule } from 'src/argon/argon.module';
configDotenv({
  path: '.env',
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: process.env.POSTGRES_DATABASE,
      host: process.env.POSTGRES_HOST,
      type: 'postgres',
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      autoLoadEntities: true,
      synchronize: true, //Alter to false
    }),
    UserModule,
    ArgonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
