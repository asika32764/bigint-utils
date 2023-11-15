import { abs, crt, eGcd, gcd, isUnit, lcm, max, min, modAdd, modInv, modMultiply, modPow, phi, random, toZn } from '../src';

describe('BigMath', () => {
  test('Test abs', () => {
    expect(abs(-123n)).toBe(123n);
    expect(abs(123n)).toBe(123n);
  });

  test.each(crtCases())('Test crt: $args', ({ args: [a, b], expected }) => {
    expect(crt(a, b)).toBe(expected);
  });

  test.each(eGcdCases())('Test eGcd: $args', ({ args: [a, b], expected }) => {
    const r = eGcd(a, b);

    expect(r.g).toBe(expected.g);
    expect(r.x).toBe(expected.x);
    expect(r.y).toBe(expected.y);
  });

  test.each(gcdCases())('Test gcd: $args', ({ args: [a, b], expected }) => {
    expect(gcd(a, b)).toBe(expected);
  });

  test.each(lcmCases())('Test lcm: $args', ({ args: [a, b], expected }) => {
    expect(lcm(a, b)).toBe(expected);
  });

  test.each(maxCases())('Test max: $args', ({ args: nums, expected }) => {
    expect(max(...nums)).toBe(expected);
  });

  test.each(minCases())('Test min: $args', ({ args: nums, expected }) => {
    expect(min(...nums)).toBe(expected);
  });

  test.each(modAddCases())('Test modAdd: $args', ({ args: [a, b, m], expected }) => {
    expect(modAdd(a, b, m)).toBe(expected);
  });

  test.each(modMultiplyCases())('Test modAdd: $args', ({ args: [a, b, m], expected }) => {
    expect(modMultiply(a, b, m)).toBe(expected);
  });

  test.each(phiCases())('Test phi: $args', ({ args: [n], expected }) => {
    expect(phi(n)).toBe(expected);
  });

  test('Test isOdd', () => {
    expect(abs(3n)).toBe(3n);
    expect(abs(4n)).toBe(4n);
    expect(abs(-3n)).toBe(3n);
    expect(abs(-4n)).toBe(4n);
  });

  test.each(isunitCases())('Test isUnit: $args', ({ args: [n], expected }) => {
    expect(isUnit(n)).toBe(expected);
  });

  test.each(toZnCases())('Test toZn: $args', ({ args: [a, b], expected }) => {
    expect(toZn(a, b)).toBe(expected);
  });

  test.each(modInvCases())('Test modInv: $args', ({ args: [n, m], expected }) => {
    expect(modInv(n, m)).toBe(expected);
  });

  test('Test modPow', () => {
    expect(modPow(19n, 6n, 26n)).toBe(25n);
    expect(modPow(11n, 49n, 17n)).toBe(11n);
    expect(modPow(62n, 19n, 9n)).toBe(8n);
    expect(modPow(245542268581n, 238476n, 271116623n)).toBe(124659241n);
  });

  test('Test random', () => {
    const e = expect(random(100n, 200n));

    e.toBeGreaterThanOrEqual(100n);
    e.toBeLessThanOrEqual(200n);
  });
});

function crtCases() {
  return [
    {
      args: [[4n, 9n, 25n], [3n, 5n, 7n]],
      expected: 707n
    },
    {
      args: [[7n, 11n, 13n], [6n, 9n, 12n]],
      expected: 636n
    },
    {
      args: [[17n, 31n, 41n], [14n, 30n, 1n]],
      expected: 4060n
    },
    {
      args: [[19n, 23n, 29n], [15n, 19n, 23n]],
      expected: 12232n
    }
  ];
}

function eGcdCases() {
  return [
    {
      args: [30n, 20n],
      expected: {
        g: 10n,
        x: 1n,
        y: -1n
      }
    },
    {
      args: [60n, 35n],
      expected: {
        g: 5n,
        x: 3n,
        y: -5n
      }
    },
    {
      args: [81n, 57n],
      expected: {
        g: 3n,
        x: -7n,
        y: 10n
      }
    },
    {
      args: [101n, 10n],
      expected: {
        g: 1n,
        x: 1n,
        y: -10n
      }
    },
    {
      args: [-99n, 78n],
      expected: {
        g: 3n,
        x: 11n,
        y: 14n
      }
    },
    {
      args: [0n, 5n],
      expected: {
        g: 5n,
        x: 0n,
        y: 1n
      }
    },
    {
      args: [17n, 0n],
      expected: {
        g: 17n,
        x: 1n,
        y: 0n
      }
    }
  ];
}

function gcdCases() {
  return [
    {
      args: [3n, 5n],
      expected: 1n
    },
    {
      args: [15n, 20n],
      expected: 5n
    },
    {
      args: [100n, 10n],
      expected: 10n
    },
    {
      args: [7n, 14n],
      expected: 7n
    },
    {
      args: [21n, 28n],
      expected: 7n
    }
  ];
}

function lcmCases() {
  return [
    {
      args: [3n, 5n],
      expected: 15n
    },
    {
      args: [12n, 15n],
      expected: 60n
    },
    {
      args: [7n, 3n],
      expected: 21n
    },
    {
      args: [21n, 6n],
      expected: 42n
    },
    {
      args: [8n, 9n],
      expected: 72n
    }
  ];
}

function maxCases() {
  return [
    {
      args: [3n, 5n, 7n, 2n],
      expected: 7n
    },
    {
      args: [12n, 18n, 17n, 20n],
      expected: 20n
    },
    {
      args: [123456789012345678901234567890n, 98765432109876543210987654321n, 100n],
      expected: 123456789012345678901234567890n
    }
  ];
}

function minCases() {
  return [
    {
      args: [3n, 5n, 7n, 2n],
      expected: 2n
    },
    {
      args: [12n, 18n, 17n, 20n],
      expected: 12n
    },
    {
      args: [123456789012345678901234567890n, 98765432109876543210987654321n, 100n],
      expected: 100n
    }
  ];
}

function modAddCases() {
  return [
    {
      args: [3n, 5n, 7n],
      expected: 1n
    },
    {
      args: [12n, 18n, 10n],
      expected: 0n
    },
    {
      args: [123456789012345678901234567890n, 98765432109876543210987654321n, 100n],
      expected: 11n
    },
    {
      args: [21n, 21n, 20n],
      expected: 2n
    },
    {
      args: [8n, 9n, 5n],
      expected: 2n
    }
  ];
}

function modMultiplyCases() {
  return [
    {
      args: [3n, 5n, 7n],
      expected: 1n
    },
    {
      args: [12n, 18n, 17n],
      expected: 12n
    },
    {
      args: [2n ** 64n, 2n ** 64n, 10n],
      expected: 6n
    },
    {
      args: [21n, 2n, 20n],
      expected: 2n
    },
    {
      args: [8n, 9n, 5n],
      expected: 2n
    }
  ];
}

function phiCases() {
  return [
    {
      args: [9n],
      expected: 6n
    },
    {
      args: [14n],
      expected: 6n
    },
    {
      args: [18n],
      expected: 6n
    },
    {
      args: [20n],
      expected: 8n
    },
    {
      // 13 is a prime number, so phi(13) should be 13-1
      args: [13n],
      expected: 12n
    }
  ];
}

function isunitCases() {
  return [
    {
      args: [1n],
      expected: true
    },
    {
      args: [-1n],
      expected: true
    },
    {
      args: [2n],
      expected: false
    },
    {
      args: [-2n],
      expected: false
    },
  ];
}

function toZnCases() {
  return [
    {
      args: [10n, 2n],
      expected: 0n
    },
    {
      args: [10n, 3n],
      expected: 1n
    },
    {
      args: [15n, 5n],
      expected: 0n
    },
    {
      args: [18n, 7n],
      expected: 4n
    },
    {
      args: [-10n, 3n],
      expected: 2n
    },
    {
      args: [0n, 3n],
      expected: 0n
    },
  ];
}

function modInvCases() {
  return [
    {
      args: [3n, 11n],
      expected: 4n
    },
    {
      args: [5n, 26n],
      expected: 21n
    },
    {
      args: [9n, 23n],
      expected: 18n
    },
    {
      args: [25n, 97n],
      expected: 66n
    },
  ];
}
