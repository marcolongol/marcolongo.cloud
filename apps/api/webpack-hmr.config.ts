// eslint-disable-next-line unicorn/import-style
import { join } from 'node:path';

import { NxAppWebpackPlugin } from '@nx/webpack/app-plugin';
import {
  Configuration,
  HotModuleReplacementPlugin,
  WebpackPluginInstance,
  WatchIgnorePlugin,
} from 'webpack';
import * as nodeExternals from 'webpack-node-externals';

const pluginFactory = (): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [];

  plugins.push(
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
    new HotModuleReplacementPlugin(),
    new WatchIgnorePlugin({
      paths: [/\.js$/, /\.d\.ts$/, /\.js.map$/],
    }),
  );

  return plugins;
};

const config: Configuration = {
  // eslint-disable-next-line unicorn/prefer-module
  entry: ['webpack/hot/poll?100', './src/main.ts'],
  target: 'node',
  watch: true,
  experiments: {
    topLevelAwait: true,
    layers: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [...pluginFactory()],
  output: {
    // eslint-disable-next-line unicorn/prefer-module
    path: join(__dirname, '../../dist/apps/api'),
    filename: 'main.js',
  },
};

export default config;
