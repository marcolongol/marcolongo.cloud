/**
 * Theme types.
 *
 * The theme types are used to define the possible themes that can be used in the
 * application. The Key is the theme name and the value is the class name that will be
 * added to the body element to apply the theme.
 *
 * @constant
 * @type {Record<string, string>}
 * @export
 */
export const ALL_THEMES = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark',
} as const;

/**
 * Theme type.
 *
 * The theme type is used to define the possible theme class names that can be used in
 * the application.
 *
 * @type {(typeof ALL_THEMES)[keyof typeof ALL_THEMES]}
 * @export
 */
export type Theme = (typeof ALL_THEMES)[keyof typeof ALL_THEMES];
