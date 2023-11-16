/**
 * Convert an `ArrayBufferLike` interface to `Uint8Array`.
 */
export function bufferToUint8(buffer: ArrayBufferLike): Uint8Array {
  return new Uint8Array(buffer);
}
