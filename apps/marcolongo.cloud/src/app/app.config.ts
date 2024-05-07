import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withComponentInputBinding,
} from '@angular/router';

import { APP_ROUTES } from 'libs/common-ui/src/shared/helpers';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: APP_ROUTES, useValue: appRoutes },
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding(),
    ),
    provideHttpClient(withFetch()),
  ],
};
