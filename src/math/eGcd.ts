export interface EgcdResult {
  g: bigint;
  x: bigint;
  y: bigint;
}

/**
 * Calculates the extended greatest common divisor (eGCD) of two BigInt numbers.
 *
 * This function computes the eGCD of two BigInt numbers 'a' and 'b', and returns an object
 * containing the GCD ('gcd') and coefficients 'x' and 'y' such that 'ax + by = gcd'.
 *
 * ```ts
 * const result = eGcd(16n, 10n);
 * result.g === 2n;
 * result.x === -3n;
 * result.y === 5n;
 * ```
 */
export function eGcd(a: bigint, b: bigint): EgcdResult {
  if (a === 0n) {
    return {
      g: b,
      x: 0n,
      y: 1n,
    };
  } else {
    let { g, x, y } = eGcd(b % a, a);
    return {
      g,
      x: y - (b / a) * x,
      y: x,
    };
  }
}

