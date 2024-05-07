import { Component } from '@angular/core';

import { NavItem } from './types';

@Component({
  selector: 'lib-mock-component',
  template: '',
})
export class MockComponent {}

export const DEFAULT_ROUTES: NavItem[] = [
  {
    path: 'home',
    label: 'Home',
    icon: 'home',
    component: MockComponent,
    active: true,
  },
  {
    path: 'about',
    label: 'About',
    icon: 'info',
    active: false,
    component: MockComponent,
  },
];

export const appRoutesFactory = (routes: NavItem[] = []): NavItem[] => {
  if (!routes) {
    console.warn('No routes provided, falling back to default routes');
    console.warn('Please provide routes using APP_ROUTES token');
  }
  return routes ?? DEFAULT_ROUTES;
};
