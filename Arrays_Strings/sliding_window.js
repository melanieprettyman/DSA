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
