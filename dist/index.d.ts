/**
 * Hello abs
 * @param num
 * @public
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
declare function eGcd(a: bigint, b: bigint): EgcdResult;

declare function gcd(a: bigint, b: bigint): bigint;

declare function isEven(n: bigint): boolean;

/**
 * Simple odd detector.
 */
declare function isOdd(n: bigint): boolean;

/**
 * Is abs one.
 */
declare function isUnit(n: bigint): boolean;

declare function lcm(a: bigint, b: bigint): bigint;

declare function max(...nums: bigint[]): bigint;

declare function min(...nums: bigint[]): bigint;

declare function modAdd(a: bigint, b: bigint, mod: bigint): bigint;

/**
 * Calc the modular inverse.
 */
declare function modInv(a: bigint, m: bigint): bigint;

declare function modMultiply(a: bigint, b: bigint, mod: bigint): bigint;

/**
 * To implement a mod-pow logic to handle cases that may create
 * a huge number which over JS memory.
 */
declare function modPow(base: bigint, exp: bigint, mod: bigint): bigint;

declare function negate(num: bigint): bigint;

declare function phi(n: bigint): bigint;

declare function random(start: bigint, end: bigint): bigint;

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

declare function randomBytes(bufferSize: number): Uint8Array;

declare function bigInt2Hex(num: bigint, padZero?: boolean): string;

declare function bigInt2HexPadZero(num: bigint): string;

declare function bigInt2Uint8Array(num: bigint, handleNegative?: boolean): Uint8Array;

declare function hex2BigInt(hex: string): bigint;

declare function hex2Uint8Array(hex: string): Uint8Array;

declare function hexPadZero(hex: string): string;

declare function toBigInt(num: string | bigint | number, from?: number): bigint;

declare function uint8Array2BigInt(bytes: Uint8Array): bigint;

declare function uint8Array2Hex(bytes: Uint8Array): string;

export { BigMath, EgcdResult, abs, bigInt2Hex, bigInt2HexPadZero, bigInt2Uint8Array, crt, eGcd, gcd, hex2BigInt, hex2Uint8Array, hexPadZero, isEven, isOdd, isUnit, lcm, max, min, mod, modAdd, modInv, modMultiply, modPow, negate, phi, random, randomBytes, toBigInt, toZn, uint8Array2BigInt, uint8Array2Hex };
