const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  coverageReporters: ['lcov', 'text', 'html', 'text-summary'],
};
