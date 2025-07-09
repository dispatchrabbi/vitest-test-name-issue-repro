import { rng } from './rng.js';

export class RandomMathClass {

  static addRandom(a) {
    return a + rng(0, 10);
  }

}