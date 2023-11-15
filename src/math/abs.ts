/**
 * Return an absolute value of bigint.
 */
export function abs(num: bigint) {
  if (num < 0n) {
    num *= -1n;
  }

  return num;
}

