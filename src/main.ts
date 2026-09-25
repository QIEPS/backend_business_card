import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { PrismaService } from './prisma/prisma.service.js';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    await app.get(PrismaService).$queryRaw`SELECT 1`;
  } catch (error) {
    await app.close();
    throw new Error(
      'Cannot connect to PostgreSQL. Check DATABASE_URL and make sure the database is running.',
      {
        cause: error,
      },
    );
  }

  app.enableShutdownHooks();
  await app.listen(app.get(ConfigService).getOrThrow<number>('PORT'));
}

bootstrap().catch((error: unknown) => {
  logger.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
