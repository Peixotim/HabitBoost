import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: process.env.POSTGRES_DATABASE,
      type: 'postgres',
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT) || 5432,
      autoLoadEntities: true,
      synchronize: true, //Alter to false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
