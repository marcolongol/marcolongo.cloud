import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ThemeService } from '@marcolongo.cloud/common-ui/services';
import { Theme, Themes } from '@marcolongo.cloud/common-ui/utils';

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
  public themes = Themes;

  selectTheme(event: Event): void {
    const theme = (event.target as HTMLSelectElement).value as Theme;
    this.themeService.setTheme(theme);
  }
}