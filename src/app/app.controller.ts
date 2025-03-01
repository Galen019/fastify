// src/app/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // The controller will handle routes without a prefix
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Handle GET requests to the root route
  @Get()
  getHello(): string {
    return this.appService.getHello(); // Calls the service method
  }

  // Handle GET requests to the /ping route
  @Get('ping')
  getPing(): string {
    return 'pong'; // Returns a static response for the ping endpoint
  }
}
