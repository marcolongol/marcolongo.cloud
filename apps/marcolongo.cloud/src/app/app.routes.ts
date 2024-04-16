import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'pdf-editor',
    loadComponent: () =>
      import('./pdf-editor/pdf-editor.component').then(
        (m) => m.PdfEditorComponent,
      ),
  },
];
