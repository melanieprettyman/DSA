/**
 * SLIDING WINDOW
 *
 * Purpose: Efficiently calculate values from contiguous subarrays of a fixed length.
 *
 * Code Example: Find the maximum sum of any contiguous subarray of size k.
 *
 * Why It Works: This technique maintains a running sum of the elements of the current window
 * and only needs to adjust by subtracting the element that goes out of the window and adding
 * the new element entering the window. This avoids the need to sum up all elements in the
 * window repeatedly.
 */

function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // Add the next element

    // Slide the window; we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // Subtract the element going out
      windowStart++; // Slide the window ahead
    }
  }

  return maxSum;
}
function testMaxSumSubarray() {
  const testCases = [
    { arr: [1, 2, 3, 4, 6], k: 2, expected: 10 },
    { arr: [2, 5, 9, 11], k: 3, expected: 25 },
    { arr: [0, 3, 4, 5, 6], k: 1, expected: 6 },
    { arr: [1, 2, 3, 4, 5], k: 5, expected: 15 }, // Whole array
    { arr: [], k: 3, expected: 0 }, // Empty array
    { arr: [-3, -1, 2, 5, 9], k: 2, expected: 14 }, // Negative numbers
    { arr: [4, -2, -8, 5, 9, -5, 1, 10], k: 3, expected: 9 }, // Mix of negative and positive numbers
  ];

  testCases.forEach((test, index) => {
    const { arr, k, expected } = test;
    const result = myMaxSumSubarray(arr, k);
    const passed = result === expected;
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected ${expected} and got ${result}`
    );
  });
}

function myMaxSumSubarray(arr, k) {
  return 0;
}

// Run the test function
testMaxSumSubarray();
