import { modInv } from './modInv';

/**
 * Function to implement Chinese Remainder Theorem.
 */
export function crt(num: bigint[], rem: bigint[]): bigint {
  let sum = 0n;

  // Product of all numbers
  const prod = num.reduce((acc, val) => acc * val, 1n);

  for (let i = 0; i < num.length; i++) {
    const p = prod / num[i];
    sum += rem[i] * modInv(p, num[i]) * p;
  }

  return sum % prod;
}
