import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// browsers do not support top-level await
// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrapApplication(AppComponent, appConfig).catch((error) =>
  console.error(error),
);
