import { Component, InjectionToken } from '@angular/core';

import { NavItem } from './types';

@Component({
  selector: 'lib-mock-component',
  template: '',
})
export class MockComponent {}

export const DEFAULT_ROUTES: NavItem[] = [
  {
    path: 'defaultroute',
    label: 'No routes provided!',
    icon: 'warning',
    component: MockComponent,
    active: true,
  },
];

export const appRoutesFactory = (routes: NavItem[] = []): NavItem[] => {
  if (!routes) {
    console.warn('No routes provided, using default routes');
    console.warn('Please provide routes using the APP_ROUTES injection token');
    return DEFAULT_ROUTES;
  }
  return routes;
};

export const APP_ROUTES = new InjectionToken<NavItem[]>('APP_ROUTES');
