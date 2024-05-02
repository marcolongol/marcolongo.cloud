/**
 * This file can be replaced during build by using the `fileReplacements` array. `ng
 * build --prod` replaces `environment.ts` with `environment.prod.ts`. The list of file
 * replacements can be found in `project.json`.
 */

import { DeepReadOnly } from './../shared/types/types';
import { baseEnvironment } from './environment.base';

/**
 * The environment configuration. The environment is protected by a read-only
 * mechanism. This means that the environment cannot be modified at runtime.
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
};
