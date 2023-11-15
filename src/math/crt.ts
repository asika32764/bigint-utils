import { modInv } from './modInv';

/**
 * Function to implement Chinese Remainder Theorem.
 */
export function crt(num: bigint[], rem: bigint[]): bigint {
  let sum = BigInt(0);
  const prod = num.reduce((acc, val) => acc * val, BigInt(1)); // Product of all numbers

  for (let i = 0; i < num.length; i++) {
    const p = prod / num[i];
    sum += rem[i] * modInv(p, num[i]) * p;
  }

  return sum % prod;
}
