import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { RandomMathClass } from './random-math-class.js';

import { rng as _rng } from './rng.js';
vi.mock('./rng.js');
const rng = vi.mocked(_rng);

describe(RandomMathClass, () => {
  describe(RandomMathClass.addRandom, () => {
    beforeEach(() => {
      rng.mockReturnValue(3);
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('adds a random number to 2', () => {
      const expected = 5;

      const actual = RandomMathClass.addRandom(2);

      expect(actual).toBe(expected);
    })
  });
});