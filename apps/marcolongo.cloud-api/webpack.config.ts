// eslint-disable-next-line unicorn/import-style
import { join } from 'node:path';

import { NxAppWebpackPlugin } from '@nx/webpack/app-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/main.ts',
  output: {
    // eslint-disable-next-line unicorn/prefer-module
    path: join(__dirname, '../../dist/apps/marcolongo.cloud-api'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: true,
      outputHashing: 'none',
    }),
  ],
};

export default config;
