import { Route } from '@angular/router';

import { gradientRoutes } from '@marcolongo.cloud/gradient-os';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'webviewer',
    loadComponent: () =>
      import('@marcolongo.cloud/common-ui').then((m) => m.WebViewerComponent),
  },
  {
    path: 'gOS',
    children: gradientRoutes,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
