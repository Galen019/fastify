// src/app/app.service.ts

import { Injectable } from '@nestjs/common';

@Injectable() // Marks this class as injectable, so it can be injected into controllers or other services
export class AppService {
  // Method to return a simple "Hello World" message
  getHello(): string {
    return 'Hello World from NestJS and Fastify!';
  }
}
