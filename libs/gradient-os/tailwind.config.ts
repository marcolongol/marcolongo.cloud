/* eslint-disable unicorn/prefer-module */
import nodePath from 'node:path';

import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    nodePath.join(__dirname, '**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
