import { Route } from '@angular/router';

export type NavItem = Route &
  Partial<{
    label: string;
    icon: string;
  }>;

export const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
  DARKGREEN: 'darkgreen',
  DARKPURPLE: 'darkpurple',
  SYSTEM: 'system',
} as const;

export type Theme = (typeof Themes)[keyof typeof Themes];
