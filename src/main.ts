import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require("dotenv").config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Any property not included in the whitelist is automatically stripped from the resulting object.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  await app.listen(3000);
}
bootstrap();
