/* eslint-disable unicorn/prefer-module */
import nodePath from 'node:path';

import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { Config } from 'tailwindcss';

// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../tailwind.preset';

const config: Config = {
  presets: [baseConfig],
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
