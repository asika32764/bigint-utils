# BigInt Toolkit

This library provides some useful arithmetic and converting functions for JS native BigInt.

## Installation

### Node

```shell
npm i bigint-toolkit

# OR

yarn add bigint-toolkit
```

### Browser

UMD

```html
<script src="dist/bigint-toolkit.min.js"></script>
```

```js
BigIntToolkit.modPow(...);
```

ES Module

```html
<script type="module">
import { modPow } from './dist/bigint-toolkit.es.min.js';

modPow(...);
</script>
```


## Usages

If you are using a bundler with ES like syntax, just import it.

```ts
import { modPow } from 'bigint-toolkit';

const r = modPow(100n, 50n, 70n);
```

The Math related functions also provides a `BigMath` namespace:

```ts
import { max, min, BigMath } from 'bigint-toolkit';

max(5n, 10n, 12n);

// Same as

BigMath.max(5n, 10n, 12n);
```

This library only supports `bigint`, it can not mix use with `number`.

```ts
import { max } from 'bigint-toolkit';

max(5n, 10, 12); // Error
```

The conversion functions are useful if you want to hash your BigInt or convert hashed hex string to numbers:

```ts
import { sha256 } from 'crypto-hash';
import { bigInt2Uint8Array, uint8Array2BigInt, uint8Array2Hex } from 'bigint-toolkit';

const hashStr: string = sha256(bigInt2Uint8Array(123456789n));

// Convert some hash result to bigint format
const hashBuffer = blake2b('This is some string', null, 256);

uint8Array2BigInt(hashBuffer);
uint8Array2Hex(hashBuffer);
```

The conversion functions are useful if you want to hash your BigInt or convert hashed hex string to numbers:

```ts
import { sha256 } from 'crypto-hash';
import { bigInt2Uint8Array, uint8Array2BigInt, uint8Array2Hex } from 'bigint-toolkit';

const hashStr: string = sha256(bigInt2Uint8Array(123456789n));

// Convert some hash result to bigint format
const hashBuffer = blake2b('This is some string', null, 256);

uint8Array2BigInt(hashBuffer);
uint8Array2Hex(hashBuffer);
```

## Contribution

### Report a BUG

Simply open an issue on GitHub, any PR will be welcome and speed up the update/fixes process.

### Test

If you want to clone this project and test it, Node.js v20up may be required, since we run Jest
with ES module, the `--experimental-vm-modules` mode may be more stable after Node 20.

-----


## :toolbox: Functions

- [toZn](#gear-tozn)
- [mod](#gear-mod)
- [randomBytes](#gear-randombytes)
- [random](#gear-random)
- [phi](#gear-phi)
- [abs](#gear-abs)
- [negate](#gear-negate)
- [isOdd](#gear-isodd)
- [eGcd](#gear-egcd)
- [modInv](#gear-modinv)
- [modPow](#gear-modpow)
- [modMultiply](#gear-modmultiply)
- [modAdd](#gear-modadd)
- [min](#gear-min)
- [max](#gear-max)
- [gcd](#gear-gcd)
- [lcm](#gear-lcm)
- [isUnit](#gear-isunit)
- [isEven](#gear-iseven)
- [crt](#gear-crt)
- [hexPadZero](#gear-hexpadzero)
- [bigintToHex](#gear-biginttohex)
- [uint8ToBigint](#gear-uint8tobigint)
- [uint8ToBigintWithNegative](#gear-uint8tobigintwithnegative)
- [uint8ToHexWithNegative](#gear-uint8tohexwithnegative)
- [uint8ToHex](#gear-uint8tohex)
- [uint8ToBuffer](#gear-uint8tobuffer)
- [hexToBigint](#gear-hextobigint)
- [toBigint](#gear-tobigint)
- [bigintToHexPadZero](#gear-biginttohexpadzero)
- [hexToUint8](#gear-hextouint8)
- [bigintToUint8](#gear-biginttouint8)
- [bufferToUint8](#gear-buffertouint8)

### :gear: toZn

Finds the smallest positive element that is congruent to a in modulo m.

| Function | Type |
| ---------- | ---------- |
| `toZn` | `(a: bigint, m: bigint) => bigint` |

### :gear: mod

An alias of toZn()

| Function | Type |
| ---------- | ---------- |
| `mod` | `(a: bigint, m: bigint) => bigint` |

### :gear: randomBytes

Generates cryptographically strong pseudorandom data, it will return
an Uint8Array object. This function use `crypto.randomBytes()` in node.js
and `window.crypto.getRandomValues()` in Web browser.

You can convert it to hex by `uint8Array2Hex()` or use some base64
library to convert it to string.

| Function | Type |
| ---------- | ---------- |
| `randomBytes` | `(bufferSize: number) => Uint8Array` |

### :gear: random

Generate a random bigint number between 2 numbers.

| Function | Type |
| ---------- | ---------- |
| `random` | `(start: bigint, end: bigint) => bigint` |

### :gear: phi

Calculates Euler's totient function (phi function) of a BigInt 'n'.

Euler's totient function calculates the count of positive integers less than or equal to 'n'
that are coprime (have greatest common divisor 1) with 'n'.

| Function | Type |
| ---------- | ---------- |
| `phi` | `(n: bigint) => bigint` |

### :gear: abs

Return an absolute value of bigint.

| Function | Type |
| ---------- | ---------- |
| `abs` | `(num: bigint) => bigint` |

### :gear: negate

Make a bigint negative.

| Function | Type |
| ---------- | ---------- |
| `negate` | `(num: bigint) => bigint` |

### :gear: isOdd

Check a bigint is odd.

| Function | Type |
| ---------- | ---------- |
| `isOdd` | `(n: bigint) => boolean` |

### :gear: eGcd

Calculates the extended greatest common divisor (eGCD) of two BigInt numbers.

This function computes the eGCD of two BigInt numbers 'a' and 'b', and returns an object
containing the GCD ('gcd') and coefficients 'x' and 'y' such that 'ax + by = gcd'.

```ts
const result = eGcd(16n, 10n);
result.g === 2n;
result.x === -3n;
result.y === 5n;
```

| Function | Type |
| ---------- | ---------- |
| `eGcd` | `(a: bigint, b: bigint) => EgcdResult` |

### :gear: modInv

Calculates the modular multiplicative inverse of a BigInt 'a' modulo 'm'.

This function computes the value 'x' such that '(a * x) % m === 1' where 'a' and 'm' are BigInt numbers.

| Function | Type |
| ---------- | ---------- |
| `modInv` | `(a: bigint, m: bigint) => bigint` |

### :gear: modPow

Calculates the modular exponentiation of a BigInt 'base' to the power of a BigInt 'exponent' modulo 'm'.

This function computes the result of `base^exp % m` where 'base', 'exponent', and 'm' are BigInt numbers.

| Function | Type |
| ---------- | ---------- |
| `modPow` | `(base: bigint, exp: bigint, m: bigint) => bigint` |

### :gear: modMultiply

Calculates the modular multiplication of two BigInt numbers.

This function computes the result of `(a * b) % m` where `a`, `b`, and `m` are BigInt numbers.

| Function | Type |
| ---------- | ---------- |
| `modMultiply` | `(a: bigint, b: bigint, mod: bigint) => bigint` |

### :gear: modAdd

Calculates the modular addition of two BigInt numbers.

This function computes the result of `(a + b) % m` where `a`, `b`, and `m` are BigInt numbers.

| Function | Type |
| ---------- | ---------- |
| `modAdd` | `(a: bigint, b: bigint, mod: bigint) => bigint` |

### :gear: min

Find min from a set of bigint.

| Function | Type |
| ---------- | ---------- |
| `min` | `(...nums: bigint[]) => bigint` |

### :gear: max

Find max from a set of bigint.

| Function | Type |
| ---------- | ---------- |
| `max` | `(...nums: bigint[]) => bigint` |

### :gear: gcd

Calculates the greatest common divisor (GCD) of two or more BigInt numbers.

This function computes the largest positive integer that divides all the input numbers without remainder.

| Function | Type |
| ---------- | ---------- |
| `gcd` | `(a: bigint, b: bigint) => bigint` |

### :gear: lcm

Calculates the least common multiple (LCM) of two or more BigInt numbers.

| Function | Type |
| ---------- | ---------- |
| `lcm` | `(a: bigint, b: bigint) => bigint` |

### :gear: isUnit

Check a bigint is unit.

| Function | Type |
| ---------- | ---------- |
| `isUnit` | `(n: bigint) => boolean` |

### :gear: isEven

Check a bigint is even.

| Function | Type |
| ---------- | ---------- |
| `isEven` | `(n: bigint) => boolean` |

### :gear: crt

Function to implement Chinese Remainder Theorem.

| Function | Type |
| ---------- | ---------- |
| `crt` | `(num: bigint[], rem: bigint[]) => bigint` |

### :gear: hexPadZero

Pad `0` to start if hex string length is odd.

| Function | Type |
| ---------- | ---------- |
| `hexPadZero` | `(hex: string) => string` |

### :gear: bigintToHex

Bigint to hex conversion.

The second argument `padZero = true` will pad a `0` on start if return length is odd.

| Function | Type |
| ---------- | ---------- |
| `bigintToHex` | `(num: bigint, padZero?: boolean) => string` |

### :gear: uint8ToBigint

Convert Uint8Array back to bigint.

If an Uint8Array has 2's complement (Mostly converted from a negative number),
set second argument as TRUE to inverse it.

| Function | Type |
| ---------- | ---------- |
| `uint8ToBigint` | `(bytes: Uint8Array, handleNegative?: boolean) => bigint` |

### :gear: uint8ToBigintWithNegative

Convert Uint8Array back to bigint and inverse the 2's complement (negative).

| Function | Type |
| ---------- | ---------- |
| `uint8ToBigintWithNegative` | `(bytes: Uint8Array) => bigint` |

### :gear: uint8ToHexWithNegative

Convert Uint8Array to hex and inverse the 2's complement (negative).

| Function | Type |
| ---------- | ---------- |
| `uint8ToHexWithNegative` | `(bytes: Uint8Array) => string` |

### :gear: uint8ToHex

Convert Uint8Array to hex string.

If an Uint8Array has 2's complement (Mostly converted from a negative number),
set second argument as TRUE to inverse it.

| Function | Type |
| ---------- | ---------- |
| `uint8ToHex` | `(bytes: Uint8Array, handleNegative?: boolean) => string` |

### :gear: uint8ToBuffer

Convert Uint8Array to ArrayBufferLike.

| Function | Type |
| ---------- | ---------- |
| `uint8ToBuffer` | `(bytes: Uint8Array) => ArrayBufferLike` |

### :gear: hexToBigint

Convert hex to bigint and add `-` sign if origin bigint is negative.

| Function | Type |
| ---------- | ---------- |
| `hexToBigint` | `(hex: string) => bigint` |

### :gear: toBigint

Convert any base of numbers to bigint.

```
toBigInt(123456789)
toBigInt('75bcd15', 16)
toBigInt('111010110111100110100010101', 2)
```

This function will auto add negative to hex string if input value less than 0.

| Function | Type |
| ---------- | ---------- |
| `toBigint` | `(num: string or number | bigint, from?: number) => bigint` |

### :gear: bigintToHexPadZero

Bigint to hex conversion and pad a `0` on start if return length is odd.

| Function | Type |
| ---------- | ---------- |
| `bigintToHexPadZero` | `(num: bigint) => string` |

### :gear: hexToUint8

Convert hex string to Uint8Array.

| Function | Type |
| ---------- | ---------- |
| `hexToUint8` | `(hex: string) => Uint8Array` |

### :gear: bigintToUint8

Bigint to Uint8Array conversion.

By default, this function unable to handle negative bigint, and will throw an Error.
If you want to convert a negative bigint to Uint8Array, set second argument as TRUE,
that this functions will try making 2's complement on the bigint to make it
positive.

NOTE: If you convert a negative bigint to Uint8Array, you must use

- `uint8ToBigint(num, true)`
- `uint8ToBigintWithNegative(num)`

to inverse the Uint8Array so you can get negative bigint back.

| Function | Type |
| ---------- | ---------- |
| `bigintToUint8` | `(num: bigint, handleNegative?: boolean) => Uint8Array` |

### :gear: bufferToUint8

Convert an `ArrayBufferLike` interface to `Uint8Array`.

| Function | Type |
| ---------- | ---------- |
| `bufferToUint8` | `(buffer: ArrayBufferLike) => Uint8Array` |



