import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Home',
    data: { label: 'Home', icon: 'fa-home' },
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'webviewer',
    title: 'WebViewer',
    data: { label: 'WebViewer', icon: 'fa-eye' },
    loadComponent: () =>
      import('@marcolongo.cloud/common-ui/webviewer').then(
        (m) => m.WebViewerComponent,
      ),
  },
  {
    path: 'gOS',
    title: 'Gradient OS',
    data: { label: 'Gradient OS', icon: 'fa-desktop' },
    loadChildren: () =>
      import('@marcolongo.cloud/gradient-os').then((m) => m.gradientRoutes),
  },
  {
    path: 'about',
    title: 'About',
    data: { label: 'About', icon: 'fa-info-circle' },
    redirectTo: 'about',
  },
  {
    path: '**',
    title: 'Not Found',
    redirectTo: 'not-found',
  },
];
