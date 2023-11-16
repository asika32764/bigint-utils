/**
 * Return an absolute value of bigint.
 */
declare function abs(num: bigint): bigint;

/**
 * Function to implement Chinese Remainder Theorem.
 */
declare function crt(num: bigint[], rem: bigint[]): bigint;

interface EgcdResult {
    g: bigint;
    x: bigint;
    y: bigint;
}
/**
 * Calculates the extended greatest common divisor (eGCD) of two BigInt numbers.
 *
 * This function computes the eGCD of two BigInt numbers 'a' and 'b', and returns an object
 * containing the GCD ('gcd') and coefficients 'x' and 'y' such that 'ax + by = gcd'.
 *
 * ```ts
 * const result = eGcd(16n, 10n);
 * result.g === 2n;
 * result.x === -3n;
 * result.y === 5n;
 * ```
 */
declare function eGcd(a: bigint, b: bigint): EgcdResult;

/**
 * Calculates the greatest common divisor (GCD) of two or more BigInt numbers.
 *
 * This function computes the largest positive integer that divides all the input numbers without remainder.
 */
declare function gcd(a: bigint, b: bigint): bigint;

/**
 * Check a bigint is even.
 */
declare function isEven(n: bigint): boolean;

/**
 * Check a bigint is odd.
 */
declare function isOdd(n: bigint): boolean;

/**
 * Check a bigint is unit.
 */
declare function isUnit(n: bigint): boolean;

/**
 * Calculates the least common multiple (LCM) of two or more BigInt numbers.
 */
declare function lcm(a: bigint, b: bigint): bigint;

/**
 * Find max from a set of bigint.
 */
declare function max(...nums: bigint[]): bigint;

/**
 * Find min from a set of bigint.
 */
declare function min(...nums: bigint[]): bigint;

/**
 * Calculates the modular addition of two BigInt numbers.
 *
 * This function computes the result of `(a + b) % m` where `a`, `b`, and `m` are BigInt numbers.
 */
declare function modAdd(a: bigint, b: bigint, mod: bigint): bigint;

/**
 * Calculates the modular multiplicative inverse of a BigInt 'a' modulo 'm'.
 *
 * This function computes the value 'x' such that '(a * x) % m === 1' where 'a' and 'm' are BigInt numbers.
 */
declare function modInv(a: bigint, m: bigint): bigint;

/**
 * Calculates the modular multiplication of two BigInt numbers.
 *
 * This function computes the result of `(a * b) % m` where `a`, `b`, and `m` are BigInt numbers.
 */
declare function modMultiply(a: bigint, b: bigint, mod: bigint): bigint;

/**
 * Calculates the modular exponentiation of a BigInt 'base' to the power of a BigInt 'exponent' modulo 'm'.
 *
 * This function computes the result of `base^exp % m` where 'base', 'exponent', and 'm' are BigInt numbers.
 */
declare function modPow(base: bigint, exp: bigint, m: bigint): bigint;

/**
 * Make a bigint negative.
 */
declare function negate(num: bigint): bigint;

/**
 * Calculates Euler's totient function (phi function) of a BigInt 'n'.
 *
 * Euler's totient function calculates the count of positive integers less than or equal to 'n'
 * that are coprime (have greatest common divisor 1) with 'n'.
 */
declare function phi(n: bigint): bigint;

/**
 * Generate a random bigint number between 2 numbers.
 */
declare function random(start: bigint, end: bigint): bigint;

/**
 * Finds the smallest positive element that is congruent to a in modulo m.
 */
declare function toZn(a: bigint, m: bigint): bigint;
/**
 * An alias of toZn()
 */
declare function mod(a: bigint, m: bigint): bigint;

type math_EgcdResult = EgcdResult;
declare const math_abs: typeof abs;
declare const math_crt: typeof crt;
declare const math_eGcd: typeof eGcd;
declare const math_gcd: typeof gcd;
declare const math_isEven: typeof isEven;
declare const math_isOdd: typeof isOdd;
declare const math_isUnit: typeof isUnit;
declare const math_lcm: typeof lcm;
declare const math_max: typeof max;
declare const math_min: typeof min;
declare const math_mod: typeof mod;
declare const math_modAdd: typeof modAdd;
declare const math_modInv: typeof modInv;
declare const math_modMultiply: typeof modMultiply;
declare const math_modPow: typeof modPow;
declare const math_negate: typeof negate;
declare const math_phi: typeof phi;
declare const math_random: typeof random;
declare const math_toZn: typeof toZn;
declare namespace math {
  export {
    math_EgcdResult as EgcdResult,
    math_abs as abs,
    math_crt as crt,
    math_eGcd as eGcd,
    math_gcd as gcd,
    math_isEven as isEven,
    math_isOdd as isOdd,
    math_isUnit as isUnit,
    math_lcm as lcm,
    math_max as max,
    math_min as min,
    math_mod as mod,
    math_modAdd as modAdd,
    math_modInv as modInv,
    math_modMultiply as modMultiply,
    math_modPow as modPow,
    math_negate as negate,
    math_phi as phi,
    math_random as random,
    math_toZn as toZn,
  };
}

declare const BigMath: typeof math;

/**
 * Generates cryptographically strong pseudorandom data, it will return
 * an Uint8Array object. This function use `crypto.randomBytes()` in node.js
 * and `window.crypto.getRandomValues()` in Web browser.
 *
 * You can convert it to hex by `uint8Array2Hex()` or use some base64
 * library to convert it to string.
 */
declare function randomBytes(bufferSize: number): Uint8Array;

/**
 * Bigint to hex conversion.
 *
 * The second argument `padZero = true` will pad a `0` on start if return length is odd.
 */
declare function bigintToHex(num: bigint, padZero?: boolean): string;

/**
 * Bigint to hex conversion and pad a `0` on start if return length is odd.
 */
declare function bigintToHexPadZero(num: bigint): string;

/**
 * Bigint to Uint8Array conversion.
 *
 * By default, this function unable to handle negative bigint, and will throw an Error.
 * If you want to convert a negative bigint to Uint8Array, set second argument as TRUE,
 * that this functions will try making 2's complement on the bigint to make it
 * positive.
 *
 * NOTE: If you convert a negative bigint to Uint8Array, you must use
 *
 * - `uint8ToBigint(num, true)`
 * - `uint8ToBigintWithNegative(num)`
 *
 * to inverse the Uint8Array so you can get negative bigint back.
 */
declare function bigintToUint8(num: bigint, handleNegative?: boolean): Uint8Array;

/**
 * Convert an `ArrayBufferLike` interface to `Uint8Array`.
 */
declare function bufferToUint8(buffer: ArrayBufferLike): Uint8Array;

/**
 * Convert hex to bigint and add `-` sign if origin bigint is negative.
 */
declare function hexToBigint(hex: string): bigint;

/**
 * Convert hex string to Uint8Array.
 */
declare function hexToUint8(hex: string): Uint8Array;

/**
 * Pad `0` to start if hex string length is odd.
 */
declare function hexPadZero(hex: string): string;

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
declare function toBigint(num: string | bigint | number, from?: number): bigint;

/**
 * Convert Uint8Array back to bigint.
 *
 * If an Uint8Array has 2's complement (Mostly converted from a negative number),
 * set second argument as TRUE to inverse it.
 */
declare function uint8ToBigint(bytes: Uint8Array, handleNegative?: boolean): bigint;

/**
 * Convert Uint8Array back to bigint and inverse the 2's complement (negative).
 */
declare function uint8ToBigintWithNegative(bytes: Uint8Array): bigint;

/**
 * Convert Uint8Array to ArrayBufferLike.
 */
declare function uint8ToBuffer(bytes: Uint8Array): ArrayBufferLike;

/**
 * Convert Uint8Array to hex string.
 *
 * If an Uint8Array has 2's complement (Mostly converted from a negative number),
 * set second argument as TRUE to inverse it.
 */
declare function uint8ToHex(bytes: Uint8Array, handleNegative?: boolean): string;

/**
 * Convert Uint8Array to hex and inverse the 2's complement (negative).
 */
declare function uint8ToHexWithNegative(bytes: Uint8Array): string;

export { BigMath, EgcdResult, abs, bigintToHex, bigintToHexPadZero, bigintToUint8, bufferToUint8, crt, eGcd, gcd, hexPadZero, hexToBigint, hexToUint8, isEven, isOdd, isUnit, lcm, max, min, mod, modAdd, modInv, modMultiply, modPow, negate, phi, random, randomBytes, toBigint, toZn, uint8ToBigint, uint8ToBigintWithNegative, uint8ToBuffer, uint8ToHex, uint8ToHexWithNegative };
