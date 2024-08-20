import { Controller, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  healthCheck() {
    Logger.log('/health endpoint hit');
    try {
      this.appService.healthCheck();
      return {
        message: 'API is healthy',
      };
    } catch {
      throw new HttpException(
        {
          message: 'API is unhealthy',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('metrics')
  metrics() {
    Logger.log('/metrics endpoint hit');
    return this.appService.metrics();
  }
}
