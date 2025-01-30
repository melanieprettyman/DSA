/**
 * TWO POINTER
 *
 * Purpose: Used primarily to find pairs in a sorted array that meet a certain criterion
 * (e.g., summing to a target).
 *
 * Code Example: Finding two numbers that sum to a specific target in a sorted array.
 *
 * Why It Works: The two-pointer technique works by exploiting the order of the sorted
 * array to efficiently find pairs. By moving the left pointer rightward, you increase
 * the sum, and by moving the right pointer leftward, you decrease the sum.
 * This allows for O(n) complexity instead of O(n^2) with a nested loop.
 */

function twoPointer(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right]; // Found the pair
    } else if (sum < target) {
      left++; // Need a larger sum
    } else {
      right--; // Need a smaller sum
    }
  }

  return [-1, -1]; // No pair found
}
