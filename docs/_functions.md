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

```
toBigInt(12345678)
toBigInt('{hex string}', 16)
```

This function will auto add negative to hex string if input value less than 0.

| Function | Type |
| ---------- | ---------- |
| `toBigInt` | `(num: string or number | bigint, from?: number) => bigint` |


