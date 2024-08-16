import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  healthCheck(): { message: string } {
    return { message: 'API is up and running' };
  }
}
