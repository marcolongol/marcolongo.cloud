import { SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideSocialAuthServiceConfig } from '@marcolongo.cloud/core/auth';
import { spyOn } from 'jest-mock';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let injector: TestBed;
  let httpTest: HttpTestingController;
  let socialAuthService: SocialAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, BrowserAnimationsModule, SocialLoginModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideSocialAuthServiceConfig(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    httpTest = injector.inject(HttpTestingController);
    socialAuthService = injector.inject(SocialAuthService);
    fixture.detectChanges();
  });

  afterEach(async () => {
    httpTest.verify();
  });

  it('should create', () => {
    httpTest.match(() => true);
    expect(component).toBeTruthy();
  });

  it('should login with Facebook', () => {
    httpTest.match(() => true);
    const signInSpy = spyOn(socialAuthService, 'signIn');
    component.loginWithFacebook();
    expect(signInSpy).toHaveBeenCalled();
  });
});
