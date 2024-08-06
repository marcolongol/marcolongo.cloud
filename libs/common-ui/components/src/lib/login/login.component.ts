import {
  SocialAuthService,
  GoogleSigninButtonModule,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  socialAuthService = inject(SocialAuthService);

  public loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
