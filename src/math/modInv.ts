import { eGcd } from './eGcd';
import { toZn } from './toZn';

/**
 * Calculates the modular multiplicative inverse of a BigInt 'a' modulo 'm'.
 *
 * This function computes the value 'x' such that '(a * x) % m === 1' where 'a' and 'm' are BigInt numbers.
 */
export function modInv(a: bigint, m: bigint): bigint {
  const egcd = eGcd(toZn(a, m), m);

  if (egcd.g !== 1n) {
    throw new Error('Modular inverse does not exist');
  }

  return toZn(egcd.x, m);
}


