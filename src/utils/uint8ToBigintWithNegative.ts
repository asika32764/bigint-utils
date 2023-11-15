import { uint8ToBigint } from './uint8ToBigint';

/**
 * Convert Uint8Array back to bigint and make positive.
 */
export function uint8ToBigintWithNegative(bytes: Uint8Array) {
  return uint8ToBigint(bytes, true);
}
