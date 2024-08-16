import {
  Controller,
  Get,
  Logger,
  HttpCode,
  HttpStatus,
  HttpException,
  Post,
  Body,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { User as UserModel } from '@prisma/client';

import { AppService } from './app.service';
import { UserService } from './services/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getData() {
    Logger.log('/ endpoint hit');
    return this.appService.getData();
  }

  @Get('health')
  @HttpCode(HttpStatus.OK)
  healthCheck() {
    Logger.log('/health endpoint hit');
    const healthCheck = this.appService.healthCheck();
    if (healthCheck.message === 'API is up and running') {
      return healthCheck;
    } else {
      throw new HttpException('API is down', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('user')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
      },
    },
  })
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    Logger.log('/user endpoint hit');
    return this.userService.createUser(userData);
  }
}
