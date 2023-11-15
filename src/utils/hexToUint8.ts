/**
 * Convert hex string to Uint8Array.
 */
export function hexToUint8(hex: string): Uint8Array {
  // Calculate the number of bytes needed
  const numBytes = hex.length / 2;
  const byteArray = new Uint8Array(numBytes);

  // Parse each byte in the hex string and add it to the Uint8Array
  for (let i = 0, j = 0; i < numBytes; i++, j += 2) {
    byteArray[i] = parseInt(hex.slice(j, j + 2), 16);
  }

  return byteArray;
}
