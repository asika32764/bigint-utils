/**
 * Convert Uint8Array to ArrayBufferLike.
 */
export function uint8ToBuffer(bytes: Uint8Array): ArrayBufferLike {
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}
