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

...

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
- [random](#gear-random)
- [phi](#gear-phi)
- [negate](#gear-negate)
- [modPow](#gear-modpow)
- [modMultiply](#gear-modmultiply)
- [modAdd](#gear-modadd)
- [min](#gear-min)
- [max](#gear-max)
- [lcm](#gear-lcm)
- [isUnit](#gear-isunit)
- [isEven](#gear-iseven)
- [uint8Array2HexIgnoreNegative](#gear-uint8array2hexignorenegative)
- [uint8Array2Hex](#gear-uint8array2hex)
- [toBigInt](#gear-tobigint)

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

### :gear: negate

Make a bigint negative.

| Function | Type |
| ---------- | ---------- |
| `negate` | `(num: bigint) => bigint` |

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

### :gear: uint8Array2HexIgnoreNegative

Convert Uint8Array to hex and make result positive.

| Function | Type |
| ---------- | ---------- |
| `uint8Array2HexIgnoreNegative` | `(bytes: Uint8Array) => string` |

### :gear: uint8Array2Hex

Convert Uint8Array to hex.

This function will convert value to bigint first then to hex,
that can make sure negative value is correct handled.

| Function | Type |
| ---------- | ---------- |
| `uint8Array2Hex` | `(bytes: Uint8Array, handleNegative?: boolean) => string` |

### :gear: toBigInt

Convert any base of numbers to bigint.

| Function | Type |
| ---------- | ---------- |
| `toBigInt` | `(num: string or number | bigint, from?: number) => bigint` |



