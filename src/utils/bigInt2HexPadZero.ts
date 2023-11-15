import { bigInt2Hex } from './bigInt2Hex';

/**
 * Bigint to hex conversion and pad a `0` on start if return length is odd.
 */
export function bigInt2HexPadZero(num: bigint) {
  return bigInt2Hex(num, true);
}
