import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem, APP_ROUTES } from '@marcolongo.cloud/core/utils';

import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public title = input('marcolongo');
  public subtitle = input('.cloud');
  public logo = input('assets/svg/marcolongo.svg');
  public navItems = input<NavItem[]>(inject(APP_ROUTES));
}
