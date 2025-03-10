/**
 * MERGE SORT
 *
 * Purpose: A divide-and-conquer algorithm that sorts an array.
 *
 *
 * Why It Works: Merge Sort breaks the array into halves until each subarray contains a
 * single element. Then it merges those subarrays to produce sorted arrays until the entire
 * array is merged back together.
 * 
 * time= O(n log n) {n bc we have to touch every element once, log n bc we dont have to compare everything to everything. we compare their local list to eachother, which gets smaller}.
 * 
 * Divide:  Divide the list or array recursively into two halves until it can no more be divided. 
   Conquer:  Each subarray is sorted individually using the merge sort algorithm. 
   Merge:  The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged. 
 */
function mergeSort(arr) {
  // Base case: return array when length is 1
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  let leftRemainder = left.slice(leftIndex);
  let rightRemainder = right.slice(rightIndex);

  return result.concat(leftRemainder).concat(rightRemainder);
}

function testMergeSort() {
  const testCases = [
    { array: [10, 6, 15, 20, 3, 1], expected: [1, 3, 6, 10, 15, 20] },
    { array: [5, 3, 8, 6, 2], expected: [2, 3, 5, 6, 8] },
    { array: [-3, -1, -2, -10], expected: [-10, -3, -2, -1] },
    { array: [1], expected: [1] }, // single element array
    { array: [], expected: [] }, // empty array
    { array: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] }, // already sorted array
    { array: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] }, // reverse sorted
  ];

  testCases.forEach((test, index) => {
    const { array, expected } = test;
    const result = myMergeSort(array);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected [${expected}] and got [${result}]`
    );
  });
}

function myMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = myMergeSort(arr.slice(0, middle));
  let right = myMergeSort(arr.slice(middle));

  return myMerge(left, right);
}

function myMerge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  let leftRemainder = left.slice(leftIndex);
  let rightRemainder = right.slice(rightIndex);

  result = result.concat(leftRemainder).concat(rightRemainder);
  return result;
}

// Run the test function
testMergeSort();
