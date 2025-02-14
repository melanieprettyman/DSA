/**
 * QUICK SORT
 *
 * Purpose: Another divide-and-conquer sorting algorithm, often faster in practice than
 * other O(n log n) algorithms.
 *
 * Why It Works: Quick Sort uses a pivot element to partition the array into two parts,
 * elements less than the pivot and elements greater than the pivot, then recursively
 * sorts the sub-arrays. This is efficient on average but can degrade to O(n^2) if the
 * pivot element is first or last element of array.
 *
 *
 * 1. choose pivot
 * 2. move pivot to the end of the array to get it out of the way
 * 3. find itemFromRight (smaller than pivot) and itemFromLeft (larger than pivot) and swap them.
 *    stop when the index of itemFromLeft > index of itemFromRight
 *    swap itemFromLeft with pivot
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    // Sort left side
    quickSort(arr, left, pivotIndex - 1);
    // sort right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // set the last elem to the pivot
  const pivot = arr[right];
  let index = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      // if the element is less than pivot swap with left most element
      swap(arr, index, j);
      index++;
    }
  }
  // pivot needs to be moved to a position where elements to the left are smaller, and elements to the right are greater or equal.
  // swap the pivot with the last element of the left partition.
  swap(arr, index, right);
  return index; // return end of left side as index
}

function swap(array, i, j) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
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
  if (left < right) {
    let pivotIndex = myPartition(arr, left, right);
    myQuickSort(arr, left, pivotIndex - 1);
    myQuickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function myPartition(arr, left, right) {
  let pivot = arr[right];
  let index = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, index, j);
      index++;
    }
  }
  swap(arr, index, right);
  return index;
}

function mySwap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Run the test function
testQuickSort();
