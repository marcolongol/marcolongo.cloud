import { InjectionToken, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from './types';
export const appRoutesFactory = (): NavItem[] => {
  const router = inject(Router);
  return router.config
    .filter((route) => route.data?.['label'])
    .map((route) => ({
      path: route.path,
      label: route.data?.['label'] || route.path,
      icon: route.data?.['icon'] || 'link',
    }));
};

export const APP_ROUTES = new InjectionToken<NavItem[]>('APP_ROUTES', {
  providedIn: 'root',
  factory: () => appRoutesFactory(),
});
