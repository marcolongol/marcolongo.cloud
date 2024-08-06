import { Route } from '@angular/router';

export const gradientRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./gradient-os.component').then((m) => m.GradientOsComponent),
  },
];
