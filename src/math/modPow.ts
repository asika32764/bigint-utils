import { abs } from './abs';
import { isOdd } from './isOdd';
import { modInv } from './modInv';
import { toZn } from './toZn';

/**
 * Calculates the modular exponentiation of a BigInt 'base' to the power of a BigInt 'exponent' modulo 'm'.
 *
 * This function computes the result of `base^exp % m` where 'base', 'exponent', and 'm' are BigInt numbers.
 */
export function modPow(base: bigint, exp: bigint, m: bigint): bigint {
  if (m === 0n) {
    throw new Error('Cannot modPow with modulus 0');
  }

  if (exp === 0n) {
    return 1n;
  }

  base = toZn(base, m);

  if (exp < 0n) {
    return modInv(modPow(base, abs(exp), m), m);
  }

  let r = 1n;

  while (exp > 0n) {
    if (base === 0n) {
      return 0n;
    }

    if (isOdd(exp)) {
      r = r * base % m;
    }

    exp = exp / 2n;
    base = base * base % m;
  }

  return r;
}
