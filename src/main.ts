import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { configDotenv } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
configDotenv({
  path: '.env',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Application is running in port ${process.env.PORT}`);
  });
}
bootstrap();
