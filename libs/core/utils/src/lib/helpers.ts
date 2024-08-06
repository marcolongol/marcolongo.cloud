import { InjectionToken, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from './types';

export const APP_ROUTES = new InjectionToken<NavItem[]>('APP_ROUTES', {
  providedIn: 'root',
  factory: () => {
    const router = inject(Router);
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
  },
});
