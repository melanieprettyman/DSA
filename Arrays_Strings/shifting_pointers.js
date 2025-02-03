/**
 * SHIFTING POINTERS
 *
 * Purpose: Shifting pointers is useful for adjusting the focus within an array without
 * reprocessing the elements multiple times.
 *
 * Why It Works: This method first reverses the entire array, then reverses the first k elements
 * and the rest separately, effectively rotating the array by k places in an efficient manner.
 */
function rotateArray(arr, k) {
  k = k % arr.length; // In case the rotation count is greater than the array length
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  function reverse(subArr, start, end) {
    while (start < end) {
      [subArr[start], subArr[end]] = [subArr[end], subArr[start]];
      start++;
      end--;
    }
  }
}

function testRotateArray() {
  const testCases = [
    { array: [1, 2, 3, 4, 5, 6], k: 2, expected: [5, 6, 1, 2, 3, 4] },
    { array: [1, 2, 3, 4, 5, 6], k: 0, expected: [1, 2, 3, 4, 5, 6] },
    { array: [1, 2, 3, 4, 5, 6], k: 6, expected: [1, 2, 3, 4, 5, 6] }, // k same as length
    { array: [1, 2, 3, 4, 5, 6], k: 9, expected: [4, 5, 6, 1, 2, 3] }, // k larger than array length
    { array: [1], k: 3, expected: [1] }, // Single element
    { array: [], k: 3, expected: [] }, // Empty array
    { array: [1, 2, 3, 4, 5, 6], k: 3, expected: [4, 5, 6, 1, 2, 3] }, // Half-length rotation
  ];

  testCases.forEach((test, index) => {
    const { array, k, expected } = test;
    myRotateArray(array, k);
    const passed = JSON.stringify(array) === JSON.stringify(expected);
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected [${expected}] and got [${array}]`
    );
  });
}

function myRotateArray(arr, k) {
  return 0;
}

// Run the test function
testRotateArray();
