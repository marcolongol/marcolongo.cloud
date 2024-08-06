import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ThemeService } from '@marcolongo.cloud/common-ui/services';

@Component({
  selector: 'lib-theme-selector',
  standalone: true,
  imports: [CommonModule],
  providers: [ThemeService],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
})
export class ThemeSelectorComponent {
  public themeService = inject(ThemeService);
}
