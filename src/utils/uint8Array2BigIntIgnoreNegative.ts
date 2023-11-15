import { uint8Array2BigInt } from './uint8Array2BigInt';

/**
 * Convert Uint8Array back to bigint and make positive.
 */
export function uint8Array2BigIntIgnoreNegative(bytes: Uint8Array) {
  return uint8Array2BigInt(bytes, false);
}
