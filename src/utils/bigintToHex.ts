import { hexPadZero } from './hexPadZero';

/**
 * Bigint to hex conversion.
 *
 * The second argument `padZero = true` will pad a `0` on start if return length is odd.
 */
export function bigintToHex(num: bigint, padZero = false) {
  let hexString = num.toString(16);

  if (!padZero) {
    return hexString;
  }

  return hexPadZero(hexString);
}
