/**
 * Convert hex to bigint and add `-` sign if origin bigint is negative.
 */
export function hexToBigint(hex: string): bigint {
  const isNegative = hex.startsWith('-');

  if (isNegative) {
    hex = hex.substring(1);
  }

  let result = BigInt('0x' + hex);

  return isNegative ? -result : result;
}
