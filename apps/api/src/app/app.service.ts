import { Injectable } from '@nestjs/common';
import { Metrics } from '@prisma/client/runtime/library';

import { PrismaService } from './modules/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async metrics(): Promise<Metrics> {
    return await this.prismaService.$metrics.json();
  }

  async healthCheck(): Promise<void> {
    await this.prismaService.$queryRaw`SELECT 1;`;
  }
}
