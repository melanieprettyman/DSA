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
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]); // Using just maxCurrent += arr[i] would mean always extending the current subarray without ever considering starting a new one.
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

function testKadaneAlgorithm() {
  const testCases = [
    { array: [-2, -3, 4, -1, -2, 1, 5, -3], expected: 7 }, // mixed negative and positive
    { array: [1, 2, 3, 4], expected: 10 }, // all positive
    { array: [-1, -2, -3, -4], expected: -1 }, // all negative
    { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 }, // another mixed array
    { array: [0, -1, 2, 3, -5, 8], expected: 8 }, // includes zero and negatives
    { array: [], expected: undefined }, // empty array, should ideally handle but here just returns undefined
    { array: [10], expected: 10 }, // single element
    { array: [10, -3, 2, 5, 6], expected: 20 }, // example with quick drops and recovery
  ];

  testCases.forEach((test, index) => {
    const { array, expected } = test;
    const result = myKadaneAlgorithm(array);
    const passed = result === expected;
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected ${expected} and got ${result}`
    );
  });
}

function myKadaneAlgorithm(arr) {
  return 0;
}

// Run the test function
testKadaneAlgorithm();
