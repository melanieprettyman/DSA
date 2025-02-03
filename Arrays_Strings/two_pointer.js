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

function testTwoPointer() {
  const testCases = [
    { arr: [1, 2, 3, 4, 6], target: 6, expected: [1, 3] },
    { arr: [2, 5, 9, 11], target: 11, expected: [0, 2] },
    { arr: [0, 3, 4, 5, 6], target: 10, expected: [2, 4] },
    { arr: [1, 2, 3, 4, 5], target: 10, expected: [-1, -1] }, // No valid pair
    { arr: [], target: 5, expected: [-1, -1] }, // Empty array
    { arr: [3, 5], target: 8, expected: [0, 1] }, // Smallest array possible for a valid pair
    { arr: [-3, -1, 2, 5, 9], target: 4, expected: [1, 3] }, // Negative numbers
  ];

  testCases.forEach((test, index) => {
    const { arr, target, expected } = test;
    const result = myTwoPointer(arr, target);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected [${expected}] and got [${result}]`
    );
  });
}

function myTwoPointer(arr, target) {
  return 0;
}

// Run the test function
testTwoPointer();
