import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  FacebookLoginProvider,
  LoginProvider,
  GoogleInitOptions,
} from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { FactoryProvider } from '@angular/core';
import { map, catchError, throwError, lastValueFrom } from 'rxjs';

export interface SocialAuthConfig {
  autoLogin?: boolean | undefined;
  lang?: string | undefined;
  googleClientId?: string;
  googleInitOptions?: GoogleInitOptions;
  facebookClientId?: string;
  facebookInitOptions?: object;
}

/**
 * Validate the social auth config.
 *
 * @param config
 * @returns {SocialAuthServiceConfig} The validated config with providers initialized.
 */
export const validateSocialAuthConfig = (
  config: SocialAuthConfig,
): SocialAuthServiceConfig => {
  const providers: { id: string; provider: LoginProvider }[] = [];

  if (!config.googleClientId && !config.facebookClientId) {
    throw new Error('At least one provider should be enabled');
  }

  if (config.googleClientId) {
    providers.push({
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        config.googleClientId,
        config.googleInitOptions,
      ),
    });
  }

  if (config.facebookClientId) {
    providers.push({
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider(
        config.facebookClientId,
        config.facebookInitOptions,
      ),
    });
  }

  return {
    autoLogin: config.autoLogin,
    lang: config.lang,
    providers: providers,
    onError: (error) => {
      console.error(error);
      throw error;
    },
  };
};

const loadSocialAuthConfig = (configUrl: string) => {
  return (http: HttpClient) =>
    lastValueFrom(
      http.get<SocialAuthConfig>(configUrl).pipe(
        map((config: SocialAuthConfig) => {
          return validateSocialAuthConfig(config);
        }),
        catchError((error: unknown) => {
          console.error('Error loading social auth config', error);
          return throwError(() => error);
        }),
      ),
    );
};

/**
 * Provide the social auth service config.
 *
 * @param {string} [configUrl] The URL of the social auth config file.
 * @returns {FactoryProvider} The provider.
 * @usageNotes
 *
 * ### Providing in a module:
 *
 * ```typescript
 * @NgModule({
 *   providers: [provideSocialAuthServiceConfig()],
 * })
 * export class AppModule {}
 * ```
 *
 * ### Providing in a component:
 *
 * ```typescript
 * @Component({
 *   selector: 'app-login',
 *   template: `<lib-login></lib-login>`,
 *   providers: [provideSocialAuthServiceConfig('assets/social-auth-config.json')],
 * })
 * export class LoginComponent {}
 * ```
 */
export const provideSocialAuthServiceConfig = (
  configUrl = '/assets/social-auth-config.json',
): FactoryProvider => {
  return {
    provide: 'SocialAuthServiceConfig',
    useFactory: loadSocialAuthConfig(configUrl),
    deps: [HttpClient],
  };
};
