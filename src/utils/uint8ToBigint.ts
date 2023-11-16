/**
 * Convert Uint8Array back to bigint.
 *
 * If an Uint8Array has 2's complement (Mostly converted from a negative number),
 * set second argument as TRUE to inverse it.
 */
export function uint8ToBigint(bytes: Uint8Array, handleNegative: boolean = false): bigint {
  let result = 0n;

  // Check if the most significant bit of the first byte is set (indicating a negative number)
  const isNegative = handleNegative && (bytes[0] & 0x80) !== 0;

  if (isNegative) {
    // For negative numbers, perform two's complement inversion
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = ~bytes[i] & 0xff;
    }

    // Add one to complete the two's complement
    let carry = 1;

    for (let i = bytes.length - 1; i >= 0 && carry > 0; i--) {
      const value = bytes[i] + carry;
      bytes[i] = value & 0xff;
      carry = value >> 8;
    }
  }

  // Iterate over the Uint8Array from the beginning and shift left (<<) by 8 bits for each byte
  for (let i = 0; i < bytes.length; i++) {
    result = (result << 8n) + BigInt(bytes[i]);
  }

  return isNegative ? -result : result;
}
