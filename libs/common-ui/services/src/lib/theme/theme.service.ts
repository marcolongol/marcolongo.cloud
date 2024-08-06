import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

import {
  InvalidThemeError,
  ALL_THEMES,
  Theme,
} from '@marcolongo.cloud/common-ui/utils';

@Injectable({
  providedIn: 'root',
})
export class ThemeService extends BehaviorSubject<Theme> {
  public readonly allThemes = ALL_THEMES;
  public readonly selectedTheme = toSignal(this.asObservable());

  constructor() {
    super((localStorage.getItem('theme') as Theme) || ALL_THEMES.LIGHT);
    this.setTheme(this.value);
  }

  setTheme(theme: string): void {
    const selectedTheme = Object.values(this.allThemes).find((t) => t === theme);
    if (!selectedTheme) {
      throw new InvalidThemeError(theme);
    }
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    this.next(selectedTheme);
  }
}
