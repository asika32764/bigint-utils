import { bigInt2HexPadZero } from './bigInt2HexPadZero';
import { hex2Uint8Array } from './hex2Uint8Array';

/**
 * Bigint to Uint8Array conversion.
 */
export function bigInt2Uint8Array(num: bigint, handleNegative = true): Uint8Array {
  if (num < 0n && handleNegative) {
    const bits: bigint = (BigInt(num.toString(2).length) / 8n + 1n) * 8n
    const prefix1: bigint = 1n << bits
    num += prefix1
  }

  return hex2Uint8Array(bigInt2HexPadZero(num));
}
