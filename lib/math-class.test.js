import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { MathClass } from './math-class.js';

describe(MathClass, () => {
  describe(MathClass.add, () => {
    it('adds 2 + 2', () => {
      const expected = 4;

      const actual = MathClass.add(2, 2);

      expect(actual).toBe(expected);
    })
  });
});