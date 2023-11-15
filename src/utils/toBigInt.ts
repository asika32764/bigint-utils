import { hex2BigInt } from './hex2BigInt';

/**
 * Convert any base of numbers to bigint.
 */
export function toBigInt(num: string | bigint | number, from: number = 10) {
  if (typeof num === 'bigint') {
    return num;
  }

  if (typeof num === 'number') {
    return BigInt(num);
  }

  if (from === 10) {
    return BigInt(num);
  } else if (from === 16) {
    return hex2BigInt(num);
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
