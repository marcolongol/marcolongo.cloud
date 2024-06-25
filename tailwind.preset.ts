import { Config } from 'tailwindcss';

const baseConfig: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bgPrimary: 'var(--color-bg-primary)',
        textPrimary: 'var(--color-text-base)',
      },
      fontSize: {
        full: '100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default baseConfig;
