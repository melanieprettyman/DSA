/**
 * HOARE'S QUICKSELECT
 *
 * Purpose: An algorithm to find the k-th smallest element in an unordered list.
 * It's related to the quicksort sorting algorithm.
 *
 * Why It Works: Hoare's Quickselect utilizes a partitioning logic similar to quicksort but
 * instead of recursing into both sides, it recurses only into the part that contains the
 * k-th element. This reduces the average complexity to O(n), making it efficient for finding
 * order statistics.
 */
function quickSelect(arr, left, right, k) {
  if (left === right) {
    return arr[left]; // the partition has only one element
  }

  const pivotIndex = partition(arr, left, right);

  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

function testQuickSelect() {
  const testCases = [
    { array: [10, 4, 5, 8, 6, 11, 26], k: 3, expected: 8 }, // 0-indexed, 3rd smallest is 6
    { array: [1, 2, 3, 4, 5, 6], k: 0, expected: 1 }, // Smallest element
    { array: [12, 3, 5, 7, 4, 19, 26], k: 5, expected: 19 }, // 5th smallest element
    { array: [7, 4, 6, 3, 9, 1], k: 4, expected: 7 }, // 4th smallest element
    { array: [9], k: 0, expected: 9 }, // Single element array
    { array: [-3, -1, -2, 10, 5], k: 2, expected: -1 }, // Array with negative numbers
    { array: [3, 2, 1, 5, 4], k: 3, expected: 4 }, // Test for correct partitioning
  ];

  testCases.forEach((test, index) => {
    const { array, k, expected } = test;
    const result = myQuickSelect([...array], 0, array.length - 1, k);
    const passed = result === expected;
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected ${expected} and got ${result}`
    );
  });
}
function myQuickSelect(arr, left, right, k) {
  return 0;
}

// Run the test function
testQuickSelect();
