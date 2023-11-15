import { bigintToHex } from './bigintToHex';
import { uint8ToBigint } from './uint8ToBigint';

/**
 * Convert Uint8Array to hex.
 *
 * This function will convert value to bigint first then to hex,
 * that can make sure negative value is correct handled.
 */
export function uint8ToHex(bytes: Uint8Array, handleNegative: boolean = false): string {
  return bigintToHex(uint8ToBigint(bytes, handleNegative));
}
