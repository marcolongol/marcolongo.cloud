import { baseEnvironment } from './environment.base';
import { DeepReadOnly } from '../shared/types/types';

/**
 * The production environment configuration. The environment is protected by a
 * read-only mechanism. This means that the environment cannot be modified at runtime.
 *
 * @example
 *   // This will throw an error
 *   environment.production = false;
 *
 * @example
 *   // This will throw an error
 *   environment.apiParams.baseUrl = 'https://api.marcolongo.cloud';
 */
export const environment: DeepReadOnly<typeof baseEnvironment> = {
  ...baseEnvironment,
  production: true,
};
