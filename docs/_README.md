# BigInt Utils

This library provides some useful arithmetic and converting functions for JS native BigInt.

## Installation

### Node

```shell
npm i bigint-utils

# OR

yarn add bigint-utils
```

### Browser

...

## Usages

If you are using a bundler with ES like syntax, just import it.

```ts
import { modPow } from 'bigint-utils';

const r = modPow(100n, 50n, 70n);
```

The Math related functions also provides a `BigMath` namespace:

```ts
import { max, min, BigMath } from 'bigint-utils';

max(5n, 10n, 12n);

// Same as

BigMath.max(5n, 10n, 12n);
```

This library only supports `bigint`, it can not mix use with `number`.

```ts
import { max } from 'bigint-utils';

max(5n, 10, 12); // Error
```

## Contribution

### Report a BUG

Simply open an issue on GitHub, any PR will be welcome and speed up the update/fixes process.

### Test

If you want to clone this project and test it, Node.js v20up may be required, since we run Jest
with ES module, the `--experimental-vm-modules` mode may be more stable after Node 20.

-----


<!-- Functions -->
