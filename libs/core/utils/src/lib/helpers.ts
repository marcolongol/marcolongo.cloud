import { InjectionToken, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { catchError, filter, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Signal } from '@angular/core';

import { NavItem } from './types';
export const appRoutesFactory = (): Signal<NavItem[]> => {
  const router = inject(Router);

  const extractRoutes = () => {
    return router.config
      .filter((route) => route.data?.['label'])
      .map((route) => {
        const navItem: NavItem = {
          path: String(route.path),
          label: route.data && route.data['label'] ? String(route.data['label']) : '',
          icon: route.data && route.data['icon'] ? String(route.data['icon']) : 'link',
        };
        return navItem;
      });
  };

  const routes$ = router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => {
      return extractRoutes();
    }),
    catchError((error) => {
      console.error('Error in appRoutesFactory', error);
      return of([]);
    }),
  );

  return toSignal(routes$, {
    initialValue: extractRoutes(),
  });
};

export const APP_ROUTES = new InjectionToken<Signal<NavItem[]>>('APP_ROUTES', {
  providedIn: 'root',
  factory: () => appRoutesFactory(),
});
