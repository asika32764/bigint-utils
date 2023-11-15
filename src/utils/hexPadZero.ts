/**
 * Pad `0` to start if hex string length is odd.
 */
export function hexPadZero(hex: string) {
  if (hex.length % 2 !== 0) {
    hex = '0' + hex;
  }

  return hex;
}
