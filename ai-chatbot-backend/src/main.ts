import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_CONSTANTS } from './common/constants/app.constant.js';
import { HttpExceptionFilter } from './common/filters/http-exception.filter.js';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(APP_CONSTANTS.apiPrefix);
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = configService.get<number>('app.port') ?? 3001;

  const swaggerConfig = new DocumentBuilder()
    .setTitle('AI Chatbot Backend API')
    .setDescription(
      'Dokumentasi API untuk testing backend AI chatbot dengan NestJS, Ollama, dan Prisma ORM v7.',
    )
    .setVersion('1.0.0')
    .addServer(`http://localhost:${port}`)
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup(APP_CONSTANTS.swaggerPath, app, swaggerDocument, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(port);

  console.log(
    `Server running on http://localhost:${port}/${APP_CONSTANTS.apiPrefix}`,
  );
  console.log(
    `Swagger docs on http://localhost:${port}/${APP_CONSTANTS.swaggerPath}`,
  );
}

void bootstrap();
