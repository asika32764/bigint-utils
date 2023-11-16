import { bigintToHex } from './bigintToHex';
import { uint8ToBigint } from './uint8ToBigint';

/**
 * Convert Uint8Array to hex string.
 *
 * If an Uint8Array has 2's complement (Mostly converted from a negative number),
 * set second argument as TRUE to inverse it.
 */
export function uint8ToHex(bytes: Uint8Array, handleNegative: boolean = false): string {
  return bigintToHex(uint8ToBigint(bytes, handleNegative));
}
