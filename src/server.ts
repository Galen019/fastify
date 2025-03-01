import fastify from 'fastify';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module'; // Your NestJS module
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

// Create Fastify instance
const fastifyApp = fastify();

// Create a function to bootstrap your NestJS app
async function bootstrap() {
  // Use the FastifyAdapter to create a NestJS app with Fastify as the HTTP server
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(fastifyApp));
  
  // Listen on all interfaces (important for Docker container accessibility)
  await app.listen(3000, '0.0.0.0');
  console.log('Application is running on: http://localhost:3000');
}

bootstrap();
