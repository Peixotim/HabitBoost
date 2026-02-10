import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { configDotenv } from 'dotenv';

configDotenv({
  path: '.env',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Application is running in port ${process.env.PORT}`);
  });
}
bootstrap();
