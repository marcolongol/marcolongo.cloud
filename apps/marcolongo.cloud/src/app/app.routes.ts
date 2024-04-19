import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'webviewer',
    loadComponent: () =>
      import('@marcolongo.cloud/common-ui').then((m) => m.WebViewerComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
