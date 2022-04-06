import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnv } from './config';

async function bootstrap() {
  const logger: Logger = new Logger('bootstrap');
  const port = +getEnv('PORT', '3000');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
