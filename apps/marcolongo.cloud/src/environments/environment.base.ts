/**
 * Base environment configuration. This is a base configuration that can be extended by
 * other environments. It should not be used directly.
 */
export const baseEnvironment = {
  production: false,
  apiParams: {
    baseUrl: 'https://api.marcolongo.cloud',
    version: 'v1',
  },
};
