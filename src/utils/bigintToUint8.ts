import { bigintToHexPadZero } from './bigintToHexPadZero';
import { hexToUint8 } from './hexToUint8';

/**
 * Bigint to Uint8Array conversion.
 */
export function bigintToUint8(num: bigint, handleNegative = false): Uint8Array {
  if (num < 0n) {
    if (handleNegative) {
      // Do a Bit complement to convert negative bigint to positive bigint
      const bits: bigint = (BigInt(num.toString(2).length) / 8n + 1n) * 8n;
      const prefix1: bigint = 1n << bits;
      num += prefix1;
    } else {
      throw new Error('BigInt should larger than 0 to convert to Uint8Array');
    }
  }

  return hexToUint8(bigintToHexPadZero(num));
}
