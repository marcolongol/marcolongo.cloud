import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOn } from 'jest-mock';

import { ALL_THEMES, InvalidThemeError } from '@marcolongo.cloud/common-ui/utils';

import { ThemeSelectorComponent } from './theme-selector.component';

describe('ThemeSelectorComponent', () => {
  let component: ThemeSelectorComponent;
  let fixture: ComponentFixture<ThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a themeService', () => {
    expect(component.themeService).toBeDefined();
  });

  it('should have a select with all themes as options', () => {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select).toBeDefined();

    const options: NodeListOf<HTMLOptionElement> = select.querySelectorAll('option');
    expect(options.length).toBe(Object.keys(ALL_THEMES).length);

    // eslint-disable-next-line unicorn/no-array-for-each
    options.forEach((option, index) => {
      // we need to use a reversed index because the options are in the order of the object keys from last to first
      const theme = Object.values(ALL_THEMES)[options.length - 1 - index];
      expect(option.value).toBe(theme);
    });
  });

  it('should change the theme when a new theme is selected', () => {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select).toBeDefined();

    const options: NodeListOf<HTMLOptionElement> = select.querySelectorAll('option');
    expect(options.length).toBe(Object.keys(ALL_THEMES).length);

    // eslint-disable-next-line unicorn/no-array-for-each
    options.forEach((option, index) => {
      // we need to use a reversed index because the options are in the order of the object keys from last to first
      const theme = Object.values(ALL_THEMES)[options.length - 1 - index];
      option.selected = true;
      select.dispatchEvent(new Event('change'));
      expect(component.themeService.selectedTheme()).toBe(theme);
      expect(document.body.className).toBe(theme);
    });
  });

  it('should throw an error when an invalid theme is selected', () => {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    expect(select).toBeDefined();

    const options: NodeListOf<HTMLOptionElement> = select.querySelectorAll('option');
    expect(options.length).toBe(Object.keys(ALL_THEMES).length);

    // eslint-disable-next-line unicorn/no-array-for-each
    options.forEach((option, index) => {
      // we need to use a reversed index because the options are in the order of the object keys from last to first
      const theme = Object.values(ALL_THEMES)[options.length - 1 - index];
      option.selected = true;
      select.dispatchEvent(new Event('change'));
      expect(component.themeService.selectedTheme()).toBe(theme);
      expect(document.body.className).toBe(theme);
    });

    const triggerChangeEvent = () => {
      select.dispatchEvent(new Event('change'));
    };

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleErrorSpy = spyOn(console, 'error').mockImplementationOnce(() => {});

    const invalidOption: HTMLOptionElement = document.createElement('option');
    invalidOption.value = 'invalid-theme';
    select.append(invalidOption);
    invalidOption.selected = true;
    triggerChangeEvent();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'ERROR',
      new InvalidThemeError(invalidOption.value),
    );
  });
});
