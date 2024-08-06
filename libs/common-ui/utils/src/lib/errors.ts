import { ALL_THEMES } from './types';
/**
 * Error thrown when a theme is not found.
 *
 * @param theme The theme that was not found.
 * @returns An error indicating that the theme was not found.
 */
export class InvalidThemeError extends Error {
  constructor(theme: string) {
    super(
      `Invalid theme: ${theme} Valid themes are: ${Object.values(ALL_THEMES).join(', ')}`,
    );
    this.name = 'InvalidThemeError';
    this.message = `Invalid theme: ${theme} Valid themes are: ${Object.values(ALL_THEMES).join(', ')}`;
  }
}
