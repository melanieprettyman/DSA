/**
 * KADANE'S ALGORITHM
 *
 * Purpose: Used to find the maximum sum of a contiguous subarray within
 * a one-dimensional numeric array.
 *
 * Why It Works: Kadane’s Algorithm keeps track of the maximum subarray sum ending at the
 * current position by using maxCurrent, and updates maxGlobal if maxCurrent itself becomes
 * larger. This ensures that the maximum subarray sum is captured efficiently in a single pass.
 */
function kadaneAlgorithm(arr) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}
