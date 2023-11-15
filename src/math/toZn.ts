/**
 * Finds the smallest positive element that is congruent to a in modulo m.
 */
export function toZn(a: bigint, m: bigint): bigint {
  if (m <= 0n) {
    throw new Error('m must be > 0')
  }

  const aZm = a % m

  return (aZm < 0n) ? aZm + m : aZm
}

/**
 * An alias of toZn()
 */
export function mod(a: bigint, m: bigint) {
  return toZn(a, m);
}

