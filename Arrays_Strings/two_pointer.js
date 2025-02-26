/**
 * TWO POINTER
 *
 * Purpose: Used primarily to find pairs in a sorted array that meet a certain criterion
 * (e.g., summing to a target).
 * 
 * Agorithm: 
 *  1. Initialization: Typically, one pointer starts at the beginning of the data structure (left pointer) and the other at the end (right pointer). 
    2. Movement: Depending on the problem, the pointers either move towards each other (like in finding a pair with a specific sum) or in the same 
       direction (like finding a longest subarray). 
    3. Condition checks: At each iteration, the algorithm compares the values pointed to by the two pointers and decides which pointer to move based 
       on the desired condition. 
    4. Termination: The loop continues until the pointers meet or a specific condition is met. 
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

function twoPointer(arr, target) {}
