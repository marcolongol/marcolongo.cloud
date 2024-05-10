import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    data: { label: 'Home', icon: 'home' },
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'webviewer',
    data: { label: 'WebViewer', icon: 'web' },
    loadComponent: () =>
      import('@marcolongo.cloud/common-ui').then((m) => m.WebViewerComponent),
  },
  {
    path: 'gOS',
    data: { label: 'Gradient OS', icon: 'gradient' },
    loadChildren: () =>
      import('@marcolongo.cloud/gradient-os').then((m) => m.gradientRoutes),
  },
  {
    path: 'about',
    data: { label: 'About', icon: 'info' },
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
