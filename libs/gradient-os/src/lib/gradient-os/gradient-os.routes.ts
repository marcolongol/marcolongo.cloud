import { Route } from '@angular/router';

export const gradientRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./gradient-os.component').then((m) => m.GradientOsComponent),
  },
];
