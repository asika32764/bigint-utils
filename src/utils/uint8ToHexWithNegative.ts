import { bigintToHex } from './bigintToHex';
import { uint8ToBigintWithNegative } from './uint8ToBigintWithNegative';

/**
 * Convert Uint8Array to hex and inverse the 2's complement (negative).
 */
export function uint8ToHexWithNegative(bytes: Uint8Array): string {
  return bigintToHex(uint8ToBigintWithNegative(bytes));
}
