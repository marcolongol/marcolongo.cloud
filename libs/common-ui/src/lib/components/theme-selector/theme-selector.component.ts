import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';

import { Theme, Themes } from '../../../shared/types';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'lib-theme-selector',
  standalone: true,
  imports: [CommonModule],
  providers: [ThemeService],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
})
export class ThemeSelectorComponent implements OnInit {
  public themeService = inject(ThemeService);
  public themes = Themes;

  @Output() themeChange = new EventEmitter<Theme>();

  ngOnInit(): void {
    console.log('ThemeSelectorComponent initialized');
    console.log('Current theme:', this.themeService.getTheme());
  }

  selectTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
