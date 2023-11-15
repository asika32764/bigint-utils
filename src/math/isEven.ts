import { isOdd } from './isOdd';

/**
 * Check a bigint is even.
 */
export function isEven(n: bigint) {
  return !isOdd(n);
}
