/**
 * Find min from a set of bigint.
 */
export function min(...nums: bigint[]): bigint {
  return nums.reduce((min, current) => current < min ? current : min);
}
