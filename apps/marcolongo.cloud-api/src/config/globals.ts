interface CustomNodeModule extends NodeModule {
  hot: {
    accept(path?: string, function_?: () => void): void;
    dispose(callback: () => void): void;
  };
}

declare const module: CustomNodeModule;

const TITLE = 'NestJS App';
const DESCRIPTION = '';
const VERSION = '1.0.0';
const TAG = 'marcolongo.cloud';
const GLOBAL_PREFIX = 'api';
const SWAGGER_PATH = 'docs';

export { TITLE, DESCRIPTION, VERSION, TAG, GLOBAL_PREFIX, SWAGGER_PATH };

export default module;
