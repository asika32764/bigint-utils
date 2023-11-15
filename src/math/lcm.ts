import { gcd } from './gcd';

/**
 * Calculates the least common multiple (LCM) of two or more BigInt numbers.
 */
export function lcm(a: bigint, b: bigint): bigint {
  return (a / gcd(a, b)) * b;
}
