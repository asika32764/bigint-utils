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


## Contribution

### Report a BUG

Simply open an issue on GitHub, any PR will be welcome and speed up the update/fixes process.

### Test

If you want to clone this project and test it, Node.js v20up may be required, since we run Jest
with ES module, the `--experimental-vm-modules` mode may be more stable after Node 20.

-----


<!-- Functions -->
