import { Test } from '@nestjs/testing';

import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [PrismaService, UserService],
    }).compile();

    service = app.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
