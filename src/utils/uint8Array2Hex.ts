import { bigInt2Hex } from './bigInt2Hex';
import { uint8Array2BigInt } from './uint8Array2BigInt';

/**
 * Convert Uint8Array to hex.
 *
 * This function will convert value to bigint first then to hex,
 * that can make sure negative value is correct handled.
 */
export function uint8Array2Hex(bytes: Uint8Array): string {
  return bigInt2Hex(uint8Array2BigInt(bytes));
}
