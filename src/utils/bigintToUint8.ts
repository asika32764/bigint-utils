import { bigintToHexPadZero } from './bigintToHexPadZero';
import { hexToUint8 } from './hexToUint8';

/**
 * Bigint to Uint8Array conversion.
 *
 * By default, this function unable to handle negative bigint, and will throw an Error.
 * If you want to convert a negative bigint to Uint8Array, set second argument as TRUE,
 * that this functions will try making 2's complement on the bigint to make it
 * positive.
 *
 * NOTE: If you convert a negative bigint to Uint8Array, you must use
 *
 * - `uint8ToBigint(num, true)`
 * - `uint8ToBigintWithNegative(num)`
 *
 * to inverse the Uint8Array so you can get negative bigint back.
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
