/**
 * Calculates the greatest common divisor (GCD) of two or more BigInt numbers.
 *
 * This function computes the largest positive integer that divides all the input numbers without remainder.
 */
export function gcd(a: bigint, b: bigint): bigint {
  if (b === 0n) {
    return a;
  }

  return gcd(b, a % b);
}
