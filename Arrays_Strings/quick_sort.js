/**
 * QUICK SORT
 *
 * Purpose: Another divide-and-conquer sorting algorithm, often faster in practice than
 * other O(n log n) algorithms.
 *
 * Why It Works: Quick Sort uses a pivot element to partition the array into two parts,
 * elements less than the pivot and elements greater than the pivot, then recursively
 * sorts the sub-arrays. This is efficient on average but can degrade to O(n^2) if the
 * pivot elements are not well chosen.
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // swap pivot
  return i + 1;
}

function testQuickSort() {
  const testCases = [
    { array: [12, 4, 5, 6, 7, 3, 1, 15], expected: [1, 3, 4, 5, 6, 7, 12, 15] },
    {
      array: [10, 80, 30, 90, 40, 50, 70],
      expected: [10, 30, 40, 50, 70, 80, 90],
    },
    { array: [-3, -1, -2, -10], expected: [-10, -3, -2, -1] },
    { array: [1], expected: [1] }, // single element
    { array: [], expected: [] }, // empty array
    { array: [5, 3, 8, 4, 2], expected: [2, 3, 4, 5, 8] }, // small array
    { array: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] }, // already sorted
    { array: [9, 8, 7, 6, 5], expected: [5, 6, 7, 8, 9] }, // reverse sorted
  ];

  testCases.forEach((test, index) => {
    const { array, expected } = test;
    myQuickSort(array); // quickSort modifies the array in place
    const passed = JSON.stringify(array) === JSON.stringify(expected);
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected [${expected}] and got [${array}]`
    );
  });
}

function myQuickSort(arr, left = 0, right = arr.length - 1) {
  return 0;
}

// Run the test function
testQuickSort();
