import { Injectable } from '@angular/core';

import { Themes, Theme } from '@marcolongo.cloud/common-ui';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: Theme = Themes.LIGHT;

  constructor() {
    this.theme = this.getTheme();
  }

  getTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) || Themes.LIGHT;
  }

  setTheme(theme: Theme): void {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    document.body.className = 'theme-' + theme;
  }
}
