/**
 * SLIDING WINDOW
 *
 * Purpose: Efficiently calculate values from contiguous subarrays of a fixed length.
 * 
 * Algorithm: 
 *    1. Define window size: Determine the fixed size of the sliding window based on the problem requirements. 
      2. Initialize pointers: Set two pointers, one for the left boundary of the window ("left pointer") and one for the right boundary ("right pointer"). 
      3. Iterate through data: Move the right pointer forward, adding the new element to the window. Perform calculations on the current window 
         (e.g., sum, check for specific conditions). If necessary, move the left pointer forward to "slide" the window, removing the element that is no longer 
         in the window. 
      4. Update result: Keep track of the best result (e.g., maximum sum, longest substring) encountered during the sliding process. 
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
/*
  You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. 
  The characters 'W' and 'B' denote the colors white and black, respectively. You are also given an integer k, which is the desired number of consecutive black blocks.
  In one operation, you can recolor a white block such that it becomes a black block. Return the minimum number of operations needed such that there is at least one 
  occurrence of k consecutive black blocks.

  Input: blocks = "WBBWWBBWBW", k = 7
  Output: 3

  Input: blocks = "WBWBBBW", k = 2
  Output: 0
  Explanation:
  No changes need to be made, since 2 consecutive black blocks already exist.
  Therefore, we return 0.
*/

function minimumRecolors(blocks, k) {
  let minChanges = Infinity; // Start with a large number to track minimum changes
  let currentW = 0; // Current count of 'W's in the window

  // Initial count of 'W's in the first window
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") currentW++;
  }
  minChanges = currentW; // Set the first window's count as initial minimum

  // Slide the window across the rest of the blocks
  for (let i = k; i < blocks.length; i++) {
    // Remove the contribution of the block that slides out of the window
    if (blocks[i - k] === "W") currentW--;
    // Add the contribution of the new block entering the window
    if (blocks[i] === "W") currentW++;

    // Update minimum changes needed
    minChanges = Math.min(minChanges, currentW);
  }

  return minChanges; // Return the minimum number of changes found
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

function testMinimumRecolors() {
  let test1 = minimumRecolors_("WBBWWBBWBW", 7);
  console.log(
    `Test1 WBBWWBBWBW: ${
      test1 === 3 ? "Passed" : "Failed"
    } - Expected 3 and got ${test1}`
  );

  let test2 = minimumRecolors_("WBWBBBW", 2);
  console.log(
    `Test 2 "WBWBBBW": ${
      test2 === 0 ? "Passed" : "Failed"
    } - Expected 0 and got ${test2}`
  );
}
// --------------------------------------------------------------------------------------
function myMaxSumSubarray(arr, k) {}

function minimumRecolors_(blocks, k) {}

// Run the test function
testMaxSumSubarray();
testMinimumRecolors();
