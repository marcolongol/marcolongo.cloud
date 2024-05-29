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
    path: '**',
    title: 'Not Found',
    redirectTo: 'not-found',
  },
];
