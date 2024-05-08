import { TestBed } from '@angular/core/testing';

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

  it('should get theme', () => {
    expect(service.getTheme()).toBe('light');
  });

  it('should set theme', () => {
    service.setTheme('dark');
    expect(service.getTheme()).toBe('dark');
  });

  it('should set theme to light', () => {
    service.setTheme('light');
    expect(service.getTheme()).toBe('light');
  });

  it('should set theme to darkgreen', () => {
    service.setTheme('darkgreen');
    expect(service.getTheme()).toBe('darkgreen');
  });

  it('should set theme to darkpurple', () => {
    service.setTheme('darkpurple');
    expect(service.getTheme()).toBe('darkpurple');
  });

  it('should set theme to system', () => {
    service.setTheme('system');
    expect(service.getTheme()).toBe('system');
  });

  it('should set theme to light after setting it to dark', () => {
    service.setTheme('dark');
    service.setTheme('light');
    expect(service.getTheme()).toBe('light');
  });

  it('should set theme to dark after setting it to light', () => {
    service.setTheme('light');
    service.setTheme('dark');
    expect(service.getTheme()).toBe('dark');
  });
});
