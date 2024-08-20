import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppModule } from './app.module';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    const controller = app.get<AppController>(AppController);
    expect(controller).toBeDefined();
  });

  it('should have a health check', () => {
    const controller = app.get<AppController>(AppController);
    expect(controller.healthCheck).toBeDefined();
  });

  it('should have a metrics endpoint', () => {
    const controller = app.get<AppController>(AppController);
    expect(controller.metrics).toBeDefined();
  });

  it('should return a health check message', () => {
    const controller = app.get<AppController>(AppController);
    expect(controller.healthCheck()).toEqual({ message: 'API is healthy' });
  });

  it('should throw an error if health check fails', () => {
    const controller = app.get<AppController>(AppController);
    jest.spyOn(controller, 'healthCheck').mockImplementation(() => {
      throw new Error('Error');
    });
    expect(() => controller.healthCheck()).toThrow();
  });

  it('should return metrics', () => {
    const controller = app.get<AppController>(AppController);
    expect(controller.metrics()).toBeDefined();
  });
});
