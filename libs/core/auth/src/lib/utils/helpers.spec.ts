import { SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { AuthConfigMocks } from './../../../tests/mocks/auth-config';
import { provideSocialAuthServiceConfig } from './helpers';

describe('LoginComponent', () => {
  let injector: TestBed;
  let httpTest: HttpTestingController;
  let socialAuthService: SocialAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLoginModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideSocialAuthServiceConfig(),
      ],
    }).compileComponents();

    injector = getTestBed();
    httpTest = injector.inject(HttpTestingController);
    socialAuthService = injector.inject(SocialAuthService);
  });

  afterEach(async () => {
    httpTest.verify();
  });

  it('should create with valid config', () => {
    socialAuthService.initState.subscribe((state) => {
      expect(state).toBe(false);
    });

    httpTest.expectOne('/assets/social-auth-config.json').flush(AuthConfigMocks.FULL);

    socialAuthService.initState.subscribe((state) => {
      expect(state).toBe(true);
    });
  });

  it('should throw error if no provider is enabled', () => {
    socialAuthService.initState.subscribe((state) => {
      expect(state).toBe(false);
    });

    httpTest.expectOne('/assets/social-auth-config.json').flush(AuthConfigMocks.EMPTY);

    socialAuthService.initState.subscribe((state) => {
      expect(state).toBe(false);
    });
  });
});
