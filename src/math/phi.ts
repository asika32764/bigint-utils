/**
 * Calculates Euler's totient function (phi function) of a BigInt 'n'.
 *
 * Euler's totient function calculates the count of positive integers less than or equal to 'n'
 * that are coprime (have greatest common divisor 1) with 'n'.
 */
export function phi(n: bigint): bigint {
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
