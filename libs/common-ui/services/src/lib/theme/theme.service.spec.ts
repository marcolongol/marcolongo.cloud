import { TestBed } from '@angular/core/testing';

import { ALL_THEMES, InvalidThemeError } from '@marcolongo.cloud/common-ui/utils';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have all themes', () => {
    expect(service.allThemes).toBeTruthy();
  });

  it('should have a selected theme', () => {
    expect(service.selectedTheme).toBeTruthy();
  });

  it('should set theme', () => {
    service.setTheme(ALL_THEMES.LIGHT);
    expect(service.value).toBe(ALL_THEMES.LIGHT);
  });

  it('should throw an error if theme is invalid', () => {
    expect(() => service.setTheme('invalid')).toThrow(
      new InvalidThemeError('invalid'),
    );
  });
});
