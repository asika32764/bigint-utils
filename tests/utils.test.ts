import { bigInt2Uint8Array, uint8Array2BigInt } from '../src';
import { uint8Array2Hex } from '../src/utils/uint8Array2Hex';

describe('Utils', () => {
  test.each(bigInt2Uint8ArrayCases())('Test bigInt2Uint8Array: $args', ({ args: [n], expected }) => {
    expect(bigInt2Uint8Array(n)).toStrictEqual(expected);
  });
  test.each(uint8Array2BigIntCases())('Test uint8Array2BigInt: $args', ({ args: [n], expected }) => {
    expect(uint8Array2BigInt(n)).toBe(expected);
  });
});

function bigInt2Uint8ArrayCases() {
  return [
    {
      args: [123456789n],
      expected: new Uint8Array([7, 91, 205, 21]),
    },
    {
      args: [-123456789n],
      expected: new Uint8Array([248, 164, 50, 235]),
    },
    {
      args: [0n],
      expected: new Uint8Array([0]),
    },
  ]
}

function uint8Array2BigIntCases() {
  return [
    {
      args: [new Uint8Array([7, 91, 205, 21])],
      expected: 123456789n,
    },
    {
      args: [new Uint8Array([248, 164, 50, 235])],
      expected: -123456789n,
    },
    {
      args: [new Uint8Array([0])],
      expected: 0n,
    },
  ];
}
