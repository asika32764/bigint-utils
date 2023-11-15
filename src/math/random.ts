import { randomBytes } from '../crypto';

/**
 * Generate a random bigint number between 2 numbers.
 */
export function random(start: bigint, end: bigint): bigint {
  if (start > end) {
    throw new Error('Start must be less than end');
  }

  const diff = end - start + 1n;
  const diffLength = diff.toString(2).length;
  let result: bigint;

  do {
    const byteSize = Math.ceil(diffLength / 8);
    const buffer = randomBytes(byteSize);
    let hexString = '0x';

    buffer.forEach(byte => {
      hexString += byte.toString(16).padStart(2, '0');
    });

    result = BigInt(hexString) & (1n << BigInt(diffLength) - 1n);
  } while (result > diff);

  return start + result;
}
