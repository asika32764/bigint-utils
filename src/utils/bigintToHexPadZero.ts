import { bigintToHex } from './bigintToHex';

/**
 * Bigint to hex conversion and pad a `0` on start if return length is odd.
 */
export function bigintToHexPadZero(num: bigint) {
  return bigintToHex(num, true);
}
