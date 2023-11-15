/**
 * Calculates the modular multiplication of two BigInt numbers.
 *
 * This function computes the result of `(a * b) % m` where `a`, `b`, and `m` are BigInt numbers.
 */
export function modMultiply(a: bigint, b: bigint, mod: bigint): bigint {
  return ((a % mod) * (b % mod)) % mod;
}
