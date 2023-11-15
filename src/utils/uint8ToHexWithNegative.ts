import { bigintToHex } from './bigintToHex';
import { uint8ToBigintWithNegative } from './uint8ToBigintWithNegative';

/**
 * Convert Uint8Array to hex and make result positive.
 */
export function uint8ToHexWithNegative(bytes: Uint8Array): string {
  return bigintToHex(uint8ToBigintWithNegative(bytes));
}
