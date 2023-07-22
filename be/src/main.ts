import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Enable CORS
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.enableCors({
      origin: 'http://localhost:5173', // Replace with the frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });
  await app.listen(3000);
}
bootstrap();
