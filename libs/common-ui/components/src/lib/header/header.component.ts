import { CommonModule } from '@angular/common';
import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../../../src/shared/helpers';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() public title = 'marcolongo.cloud';

  @Input() public logo = 'assets/marcolongo.svg';

  public navItems = inject(APP_ROUTES);
}
