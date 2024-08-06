import { ALL_THEMES } from './types';

describe('Types', () => {
  it('should have all themes', () => {
    expect(ALL_THEMES).toBeDefined();
    expect(Object.values(ALL_THEMES).length).toBeGreaterThan(0);
  });
});
