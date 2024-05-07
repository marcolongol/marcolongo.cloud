import { Route } from '@angular/router';

export type NavItem = Route &
  Partial<{
    label: string;
    icon: string;
    active: boolean;
  }>;
