/**
 * Find max from a set of bigint.
 */
export function max(...nums: bigint[]): bigint {
  return nums.reduce((max, current) => current > max ? current : max);
}
