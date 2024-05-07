import { NavItem } from '@marcolongo.cloud/common-ui';

export const appRoutes: NavItem[] = [
  {
    label: 'Home',
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  // TODO: webviewer must move to a secondary library entrypoint to allow for lazy loading
  // {
  //   path: 'webviewer',
  //   loadComponent: () =>
  //     import('@marcolongo.cloud/common-ui').then((m) => m.WebViewerComponent),
  // },
  {
    label: 'Gradient OS',
    path: 'gOS',
    loadChildren: () =>
      import('@marcolongo.cloud/gradient-os').then((m) => m.gradientRoutes),
  },
  {
    label: 'About',
    path: 'about',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
