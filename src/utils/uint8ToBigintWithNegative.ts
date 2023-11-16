import { uint8ToBigint } from './uint8ToBigint';

/**
 * Convert Uint8Array back to bigint and inverse the 2's complement (negative).
 */
export function uint8ToBigintWithNegative(bytes: Uint8Array) {
  return uint8ToBigint(bytes, true);
}
