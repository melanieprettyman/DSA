/**
 * BINARY SEARCH
 *
 * Description: Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half
 * the portion of the list that could contain the item, until you've narrowed the possible locations to just one.
 *
 * Characteristics:
 * - The array must be sorted for binary search to work.
 * - It significantly reduces the time complexity to O(log n) compared to linear search's O(n).
 * - It operates by dividing the search interval in half, checking the middle element, and deciding in which half the target might exist.
 *
 * Process:
 * 1. Compare the target value to the middle element of the array.
 * 2. If the target value matches the middle element, the search is over.
 * 3. If the target value is less than the middle element, repeat the search on the left subarray.
 * 4. If the target value is greater than the middle element, repeat the search on the right subarray.
 *
 * Example Use Case:
 * Suppose you are given a sorted array [1, 3, 5, 7, 9] and you want to find the position of the number 7.
 * Binary search will start by examining the middle item which is 5, since 7 is greater, it will next look at the subarray [7,9] and find 7.
 *
 * Implementation:
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }

  return -1; // Target not found
}

// Modification to Handle Duplicates: Modify the binary search to find the first or last occurrence of a target in a sorted array with duplicates.
function binarySearchFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid; // Record the position of the target
      right = mid - 1; // Continue searching to the left
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result; // Return the position of the first occurrence
}

// A recursive version of binary search divides the problem into smaller subproblems and calls itself to solve these subproblems:
function recursiveBinarySearch(arr, left, right, target) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] > target) {
      return recursiveBinarySearch(arr, left, mid - 1, target); // Search the left subarray
    } else {
      return recursiveBinarySearch(arr, mid + 1, right, target); // Search the right subarray
    }
  }
  return -1; // Target not found
}

// ---------------------------------------[PRACTICE]----------------------------------------
function binarySearch_(arr, target) {}
// Modification to Handle Duplicates: Modify the binary search to find the first or last occurrence of a target in a sorted array with duplicates.
function binarySearchFirstOccurrence_(arr, target) {}
// A recursive version of binary search divides the problem into smaller subproblems and calls itself to solve these subproblems:
function recursiveBinarySearch_(arr, left, right, target) {}
// ---------------------------------------[TEST]----------------------------------------

/*
 * Testing the Binary Search Function
 * Example:
 * Array: [1, 2, 3, 4, 5]
 * Target: 3
 * Expected Output: Index 2
 */

function testBinarySearch() {
  const testArray = [1, 2, 3, 4, 5];
  const targetValue = 3;
  const result = binarySearch_(testArray, targetValue);
  console.log(
    "Binary Search Test:",
    result === 2 ? "PASS" : "FAIL",
    `| The position of ${targetValue} in [${testArray.join(
      ", "
    )}] is ${result}.`
  );
}
function testRecursiveBS() {
  const testArray = [1, 2, 3, 4, 5];
  const targetValue = 3;
  const recursiveResult = recursiveBinarySearch_(
    testArray,
    0,
    testArray.length - 1,
    targetValue
  );
  console.log(
    "Recursive search:",
    recursiveResult === 2 ? "PASS" : "FAIL",
    `| The position of ${targetValue} in [${testArray.join(
      ", "
    )}] is ${recursiveResult}.`
  );
}
function testBinarySearchFirstOccurrence() {
  let tests = [
    { array: [1, 2, 2, 2, 3, 4, 5], target: 2, expected: 1 },
    { array: [1, 1, 1, 2, 3, 3, 3], target: 3, expected: 4 },
    { array: [0, 1, 2, 3, 4, 5, 6], target: 3, expected: 3 },
    { array: [1, 2, 3, 4, 5, 6, 7], target: 8, expected: -1 },
    { array: [3, 3, 3, 3, 3, 3, 3], target: 3, expected: 0 },
    { array: [], target: 3, expected: -1 },
    { array: [1], target: 1, expected: 0 },
    { array: [1], target: 2, expected: -1 },
  ];

  tests.forEach((test) => {
    let result = binarySearchFirstOccurrence_(test.array, test.target);
    console.log(
      `Array: [${test.array.join(", ")}], Target: ${test.target}, Expected: ${
        test.expected
      }, Result: ${result}, Pass: ${result === test.expected}`
    );
  });
}

testBinarySearchFirstOccurrence();
testBinarySearch();
testRecursiveBS();
