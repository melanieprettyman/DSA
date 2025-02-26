/**
 * PREFIX SUM
 *
 * Purpose: Used to quickly calculate the sum of elements in a range (i, j) in an array.
 *
 * Code Example: Calculate the sum of elements between two indices in an array using prefix sums.
 * 
 * Algorithm: 
 *  1. Initialize: Create a new array (prefix sum array) of the same size as the original array and set the first element of the prefix 
 *     sum array to the first element of the original array. 
 *  2. Iterate: Loop through the original array starting from the second element. 
    3. Calculate cumulative sum: For each element in the original array, add its value to the previous element in the prefix sum array to 
       calculate the cumulative sum at that index. 
 *
 * Why It Works: By storing cumulative sums up to each index, you can calculate the sum between 
   any two indices in constant time O(1) by subtracting the cumulative sum up to the start of 
   the range from the cumulative sum up to the end of the range.
 */

function prefixSum(arr) {
  let prefix = new Array(arr.length + 1).fill(0);
  for (let i = 1; i <= arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i - 1];
  }
  return (i, j) => prefix[j + 1] - prefix[i];
}

function testPrefixSum() {
  const arr = [1, 2, 3, 4, 5];
  const getSum = myPrefixSum(arr); // This initializes the prefix sum array and returns a function to calculate the sum between two indices

  const testCases = [
    { i: 0, j: 2, expected: 6 }, // sum of 1+2+3
    { i: 1, j: 3, expected: 9 }, // sum of 2+3+4
    { i: 0, j: 4, expected: 15 }, // sum of 1+2+3+4+5
    { i: 2, j: 4, expected: 12 }, // sum of 3+4+5
    { i: 3, j: 3, expected: 4 }, // sum of just 4
  ];

  testCases.forEach((test, index) => {
    const { i, j, expected } = test;
    const result = getSum(i, j);
    const passed = result === expected;
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected ${expected} and got ${result}`
    );
  });
}

function myPrefixSum(arr) {
  let prefix = new Array(arr.length + 1).fill(0);
  for (let i = 1; i < prefix.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i - 1];
  }
  return (i, j) => prefix[j + 1] - prefix[i];
}

// Run the test function
testPrefixSum();
