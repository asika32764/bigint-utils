import { hexToBigint } from './hexToBigint';

/**
 * Convert any base of numbers to bigint.
 *
 * ```
 * toBigInt(123456789)
 * toBigInt('75bcd15', 16)
 * toBigInt('111010110111100110100010101', 2)
 * ```
 *
 * This function will auto add negative to hex string if input value less than 0.
 */
export function toBigint(num: string | bigint | number, from: number = 10) {
  if (typeof num === 'bigint') {
    return num;
  }

  if (typeof num === 'number') {
    return BigInt(num);
  }

  if (from === 10) {
    return BigInt(num);
  } else if (from === 16) {
    return hexToBigint(num);
  } else {
    let decimalValue = 0n;
    for (let i = 0; i < num.length; i++) {
      const digit = parseInt(num[i], from);
      if (isNaN(digit)) {
        throw new Error('Invalid character for base: ' + from);
      }
      decimalValue = decimalValue * BigInt(from) + BigInt(digit);
    }
    return decimalValue;
  }
}
