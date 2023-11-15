(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BigIntToolkit = {}));
})(this, (function (exports) { 'use strict';

    /**
     * Return an absolute value of bigint.
     */
    function abs(num) {
        if (num < 0n) {
            num *= -1n;
        }
        return num;
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

    /**
     * Finds the smallest positive element that is congruent to a in modulo m.
     */
    function toZn(a, m) {
        if (m <= 0n) {
            throw new Error('m must be > 0');
        }
        const aZm = a % m;
        return (aZm < 0n) ? aZm + m : aZm;
    }
    /**
     * An alias of toZn()
     */
    function mod(a, m) {
        return toZn(a, m);
    }

    /**
     * Calculates the modular multiplicative inverse of a BigInt 'a' modulo 'm'.
     *
     * This function computes the value 'x' such that '(a * x) % m === 1' where 'a' and 'm' are BigInt numbers.
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
        let sum = 0n;
        // Product of all numbers
        const prod = num.reduce((acc, val) => acc * val, 1n);
        for (let i = 0; i < num.length; i++) {
            const p = prod / num[i];
            sum += rem[i] * modInv(p, num[i]) * p;
        }
        return sum % prod;
    }

    /**
     * Calculates the greatest common divisor (GCD) of two or more BigInt numbers.
     *
     * This function computes the largest positive integer that divides all the input numbers without remainder.
     */
    function gcd(a, b) {
        if (b === 0n) {
            return a;
        }
        return gcd(b, a % b);
    }

    /**
     * Check a bigint is odd.
     */
    function isOdd(n) {
        return (n % 2n) === 1n;
    }

    /**
     * Check a bigint is even.
     */
    function isEven(n) {
        return !isOdd(n);
    }

    /**
     * Check a bigint is unit.
     */
    function isUnit(n) {
        return abs(n) === 1n;
    }

    /**
     * Calculates the least common multiple (LCM) of two or more BigInt numbers.
     */
    function lcm(a, b) {
        return (a / gcd(a, b)) * b;
    }

    /**
     * Find max from a set of bigint.
     */
    function max(...nums) {
        return nums.reduce((max, current) => current > max ? current : max);
    }

    /**
     * Find min from a set of bigint.
     */
    function min(...nums) {
        return nums.reduce((min, current) => current < min ? current : min);
    }

    /**
     * Calculates the modular addition of two BigInt numbers.
     *
     * This function computes the result of `(a + b) % m` where `a`, `b`, and `m` are BigInt numbers.
     */
    function modAdd(a, b, mod) {
        return ((a % mod) + (b % mod)) % mod;
    }

    /**
     * Calculates the modular multiplication of two BigInt numbers.
     *
     * This function computes the result of `(a * b) % m` where `a`, `b`, and `m` are BigInt numbers.
     */
    function modMultiply(a, b, mod) {
        return ((a % mod) * (b % mod)) % mod;
    }

    /**
     * Calculates the modular exponentiation of a BigInt 'base' to the power of a BigInt 'exponent' modulo 'm'.
     *
     * This function computes the result of `base^exp % m` where 'base', 'exponent', and 'm' are BigInt numbers.
     */
    function modPow(base, exp, m) {
        if (m === 0n) {
            throw new Error('Cannot modPow with modulus 0');
        }
        if (exp === 0n) {
            return 1n;
        }
        base = toZn(base, m);
        if (exp < 0n) {
            return modInv(modPow(base, abs(exp), m), m);
        }
        let r = 1n;
        while (exp > 0n) {
            if (base === 0n) {
                return 0n;
            }
            if (isOdd(exp)) {
                r = r * base % m;
            }
            exp = exp / 2n;
            base = base * base % m;
        }
        return r;
    }

    /**
     * Make a bigint negative.
     */
    function negate(num) {
        return -abs(num);
    }

    /**
     * Calculates Euler's totient function (phi function) of a BigInt 'n'.
     *
     * Euler's totient function calculates the count of positive integers less than or equal to 'n'
     * that are coprime (have greatest common divisor 1) with 'n'.
     */
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
        if (n > 1n) {
            result -= result / n;
        }
        return result;
    }

    /**
     * Generates cryptographically strong pseudorandom data, it will return
     * an Uint8Array object. This function use `crypto.randomBytes()` in node.js
     * and `window.crypto.getRandomValues()` in Web browser.
     *
     * You can convert it to hex by `uint8Array2Hex()` or use some base64
     * library to convert it to string.
     */
    function randomBytes(bufferSize) {
        // This checks if the code is running in a Node.js environment
        if (typeof process === 'object' && typeof require === 'function') {
            const { randomBytes: rb } = require('crypto');
            return new Uint8Array(rb(bufferSize));
        }
        else {
            // For web environments, use the Web Crypto API
            const buffer = new Uint8Array(bufferSize);
            window.crypto.getRandomValues(buffer);
            return buffer;
        }
    }

    /**
     * Generate a random bigint number between 2 numbers.
     */
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

    /**
     * Pad `0` to start if hex string length is odd.
     */
    function hexPadZero(hex) {
        if (hex.length % 2 !== 0) {
            hex = '0' + hex;
        }
        return hex;
    }

    /**
     * Bigint to hex conversion.
     *
     * The second argument `padZero = true` will pad a `0` on start if return length is odd.
     */
    function bigInt2Hex(num, padZero = false) {
        let hexString = num.toString(16);
        if (!padZero) {
            return hexString;
        }
        return hexPadZero(hexString);
    }

    /**
     * Bigint to hex conversion and pad a `0` on start if return length is odd.
     */
    function bigInt2HexPadZero(num) {
        return bigInt2Hex(num, true);
    }

    /**
     * Convert hex string to Uint8Array.
     */
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

    /**
     * Bigint to Uint8Array conversion.
     */
    function bigInt2Uint8Array(num, handleNegative = true) {
        if (num < 0n && handleNegative) {
            const bits = (BigInt(num.toString(2).length) / 8n + 1n) * 8n;
            const prefix1 = 1n << bits;
            num += prefix1;
        }
        return hex2Uint8Array(bigInt2HexPadZero(num));
    }

    /**
     * Convert hex to bigint and add `-` sign if origin bigint is negative.
     */
    function hex2BigInt(hex) {
        const isNegative = hex.startsWith('-');
        if (isNegative) {
            hex = hex.substring(1);
        }
        let result = BigInt('0x' + hex);
        return isNegative ? -result : result;
    }

    /**
     * Convert any base of numbers to bigint.
     */
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

    /**
     * Convert Uint8Array back to bigint.
     *
     * Set the second argument to FALSE will always return positive value.
     */
    function uint8Array2BigInt(bytes, handleNegative = true) {
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

    /**
     * Convert Uint8Array back to bigint and make positive.
     */
    function uint8Array2BigIntIgnoreNegative(bytes) {
        return uint8Array2BigInt(bytes, false);
    }

    /**
     * Convert Uint8Array to hex.
     *
     * This function will convert value to bigint first then to hex,
     * that can make sure negative value is correct handled.
     */
    function uint8Array2Hex(bytes, handleNegative = false) {
        return bigInt2Hex(uint8Array2BigInt(bytes, handleNegative));
    }

    /**
     * Convert Uint8Array to hex and make result positive.
     */
    function uint8Array2HexIgnoreNegative(bytes) {
        return bigInt2Hex(uint8Array2BigIntIgnoreNegative(bytes));
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
    exports.uint8Array2BigIntIgnoreNegative = uint8Array2BigIntIgnoreNegative;
    exports.uint8Array2Hex = uint8Array2Hex;
    exports.uint8Array2HexIgnoreNegative = uint8Array2HexIgnoreNegative;

}));
//# sourceMappingURL=bigint-toolkit.js.map
