'use strict';

function abs(num) {
    if (num < 0n) {
        num *= -1n;
    }
    return num;
}

function eGcd(a, b) {
    if (a === 0n) {
        return {
            g: b,
            x: 0n,
            y: 1n,
        };
    }
    else {
        let { g, x, y } = eGcd(b % a, a);
        return {
            g,
            x: y - (b / a) * x,
            y: x,
        };
    }
}

function toZn(a, m) {
    if (m <= 0n) {
        throw new Error('m must be > 0');
    }
    const aZn = a % m;
    return (aZn < 0n) ? aZn + m : aZn;
}
/**
 * An alias of toZn()
 */
function mod(a, m) {
    return toZn(a, m);
}

/**
 * Calc the modular inverse.
 */
function modInv(a, m) {
    const egcd = eGcd(toZn(a, m), m);
    if (egcd.g !== 1n) {
        throw new Error('Modular inverse does not exist');
    }
    return toZn(egcd.x, m);
}

/**
 * Function to implement Chinese Remainder Theorem.
 */
function crt(num, rem) {
    let sum = BigInt(0);
    const prod = num.reduce((acc, val) => acc * val, BigInt(1)); // Product of all numbers
    for (let i = 0; i < num.length; i++) {
        const p = prod / num[i];
        sum += rem[i] * modInv(p, num[i]) * p;
    }
    return sum % prod;
}

function gcd(a, b) {
    if (b === 0n) {
        return a;
    }
    return gcd(b, a % b);
}

/**
 * Simple odd detector.
 */
function isOdd(n) {
    return (n % 2n) === 1n;
}

function isEven(n) {
    return !isOdd(n);
}

/**
 * Is abs one.
 */
function isUnit(n) {
    return abs(n) === 1n;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}

function max(...nums) {
    return nums.reduce((max, current) => current > max ? current : max);
}

function min(...nums) {
    return nums.reduce((min, current) => current < min ? current : min);
}

function modAdd(a, b, mod) {
    return ((a % mod) + (b % mod)) % mod;
}

function modMultiply(a, b, mod) {
    return ((a % mod) * (b % mod)) % mod;
}

/**
 * To implement a mod-pow logic to handle cases that may create
 * a huge number which over JS memory.
 */
function modPow(base, exp, mod) {
    if (mod === 0n) {
        throw new Error('Cannot modPow with modulus 0');
    }
    if (exp === 0n) {
        return 1n;
    }
    base = toZn(base, mod);
    if (exp < 0n) {
        return modInv(modPow(base, abs(exp), mod), mod);
    }
    let r = 1n;
    while (exp > 0n) {
        if (base === 0n) {
            return 0n;
        }
        if (isOdd(exp)) {
            r = r * base % mod;
        }
        exp = exp / 2n;
        base = base * base % mod;
    }
    return r;
}

function negate(num) {
    return -abs(num);
}

function phi(n) {
    let result = n;
    for (let i = 2n; i * i <= n; i++) {
        if (n % i === 0n) {
            while (n % i === 0n) {
                n /= i;
            }
            result -= result / i;
        }
    }
    if (n > 1n)
        result -= result / n;
    return result;
}

function randomBytes(bufferSize) {
    // This checks if the code is running in a Node.js environment
    if (typeof process === 'object' && typeof require === 'function') {
        const { randomBytes } = require('crypto');
        return new Uint8Array(randomBytes(bufferSize));
    }
    else {
        // For web environments, use the Web Crypto API
        const buffer = new Uint8Array(bufferSize);
        window.crypto.getRandomValues(buffer);
        return buffer;
    }
}

function random(start, end) {
    if (start > end) {
        throw new Error('Start must be less than end');
    }
    const diff = end - start + 1n;
    const diffLength = diff.toString(2).length;
    let result;
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

var math = /*#__PURE__*/Object.freeze({
    __proto__: null,
    abs: abs,
    crt: crt,
    eGcd: eGcd,
    gcd: gcd,
    isEven: isEven,
    isOdd: isOdd,
    isUnit: isUnit,
    lcm: lcm,
    max: max,
    min: min,
    mod: mod,
    modAdd: modAdd,
    modInv: modInv,
    modMultiply: modMultiply,
    modPow: modPow,
    negate: negate,
    phi: phi,
    random: random,
    toZn: toZn
});

const BigMath = math;

function hexPadZero(hex) {
    if (hex.length % 2 !== 0) {
        hex = '0' + hex;
    }
    return hex;
}

function bigInt2Hex(num, padZero = false) {
    let hexString = num.toString(16);
    if (!padZero) {
        return hexString;
    }
    return hexPadZero(hexString);
}

function bigInt2HexPadZero(num) {
    return bigInt2Hex(num, true);
}

function hex2Uint8Array(hex) {
    // Calculate the number of bytes needed
    const numBytes = hex.length / 2;
    const byteArray = new Uint8Array(numBytes);
    // Parse each byte in the hex string and add it to the Uint8Array
    for (let i = 0, j = 0; i < numBytes; i++, j += 2) {
        byteArray[i] = parseInt(hex.slice(j, j + 2), 16);
    }
    return byteArray;
}

function bigInt2Uint8Array(num, handleNegative = true) {
    if (num < 0n && handleNegative) {
        const bits = (BigInt(num.toString(2).length) / 8n + 1n) * 8n;
        const prefix1 = 1n << bits;
        num += prefix1;
    }
    return hex2Uint8Array(bigInt2HexPadZero(num));
}

function hex2BigInt(hex) {
    const isNegative = hex.startsWith('-');
    if (isNegative) {
        hex = hex.substring(1);
    }
    let result = BigInt('0x' + hex);
    return isNegative ? -result : result;
}

function toBigInt(num, from = 10) {
    if (typeof num === 'bigint') {
        return num;
    }
    if (typeof num === 'number') {
        return BigInt(num);
    }
    if (from === 10) {
        return BigInt(num);
    }
    else if (from === 16) {
        return hex2BigInt(num);
    }
    else {
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

function uint8Array2BigInt(bytes) {
    let result = 0n;
    // Check if the most significant bit of the first byte is set (indicating a negative number)
    const isNegative = (bytes[0] & 0x80) !== 0;
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

function uint8Array2Hex(bytes) {
    return bigInt2Hex(uint8Array2BigInt(bytes));
}

exports.BigMath = BigMath;
exports.abs = abs;
exports.bigInt2Hex = bigInt2Hex;
exports.bigInt2HexPadZero = bigInt2HexPadZero;
exports.bigInt2Uint8Array = bigInt2Uint8Array;
exports.crt = crt;
exports.eGcd = eGcd;
exports.gcd = gcd;
exports.hex2BigInt = hex2BigInt;
exports.hex2Uint8Array = hex2Uint8Array;
exports.hexPadZero = hexPadZero;
exports.isEven = isEven;
exports.isOdd = isOdd;
exports.isUnit = isUnit;
exports.lcm = lcm;
exports.max = max;
exports.min = min;
exports.mod = mod;
exports.modAdd = modAdd;
exports.modInv = modInv;
exports.modMultiply = modMultiply;
exports.modPow = modPow;
exports.negate = negate;
exports.phi = phi;
exports.random = random;
exports.randomBytes = randomBytes;
exports.toBigInt = toBigInt;
exports.toZn = toZn;
exports.uint8Array2BigInt = uint8Array2BigInt;
exports.uint8Array2Hex = uint8Array2Hex;
//# sourceMappingURL=bigint-utils.cjs.map
