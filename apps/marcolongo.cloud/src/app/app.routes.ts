import { Route } from '@angular/router';

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
    loadChildren: () =>
      import('@marcolongo.cloud/gradient-os').then((m) => m.gradientRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
