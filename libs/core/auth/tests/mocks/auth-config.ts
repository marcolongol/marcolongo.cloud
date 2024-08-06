import { SocialAuthConfig } from '../../src/lib/utils/helpers';

export class AuthConfigMocks {
  static readonly EMPTY: SocialAuthConfig = {
    autoLogin: true,
    lang: 'en',
  };

  static readonly INVALID: SocialAuthConfig = {
    autoLogin: true,
    lang: 'en',
  };

  static readonly GOOGLE: SocialAuthConfig = {
    autoLogin: true,
    lang: 'en',
    googleClientId: 'googleClientId',
    googleInitOptions: {
      oneTapEnabled: true,
      scopes: 'email',
    },
  };

  static readonly FACEBOOK: SocialAuthConfig = {
    autoLogin: true,
    lang: 'en',
    facebookClientId: 'facebookClientId',
    facebookInitOptions: {
      appId: 'facebookClientId',
      version: 'v9.0',
    },
  };

  static readonly FULL: SocialAuthConfig = {
    autoLogin: true,
    lang: 'en',
    googleClientId: 'googleClientId',
    googleInitOptions: {
      oneTapEnabled: true,
      scopes: 'email',
    },
    facebookClientId: 'facebookClientId',
    facebookInitOptions: {
      appId: 'facebookClientId',
      version: 'v9.0',
    },
  };
}
