import { abs } from './abs';

/**
 * Make a bigint negative.
 */
export function negate(num: bigint) {
  return -abs(num);
}
