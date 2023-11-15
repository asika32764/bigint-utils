import { abs } from './abs';

/**
 * Check a bigint is unit.
 */
export function isUnit(n: bigint) {
  return abs(n) === 1n;
}

