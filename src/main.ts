import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir peticiones desde cualquier origen
  app.enableCors({
    origin: '*', // O puedes especificar un dominio exacto como: 'https://mi-frontend.vercel.app'
    methods: ['GET', 'POST', 'PATCH', 'DELETE','PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3010);
}
bootstrap();
