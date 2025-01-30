/**
 * PREFIX SUM
 *
 * Purpose: Used to quickly calculate the sum of elements in a range (i, j) in an array.
 *
 * Code Example: Calculate the sum of elements between two indices in an array using prefix sums.
 *
 *Why It Works: By storing cumulative sums up to each index, you can calculate the sum between 
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
