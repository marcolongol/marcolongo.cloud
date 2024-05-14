import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Optional,
  ChangeDetectionStrategy,
  inject,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem, APP_ROUTES } from '@marcolongo.cloud/core/utils';

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
  @Input() public title = 'marcolongo';
  @Input() @Optional() public subtitle = '.cloud';

  @Input() public logo = 'assets/marcolongo.svg';

  public navItems = input<NavItem[]>(inject(APP_ROUTES));
}
