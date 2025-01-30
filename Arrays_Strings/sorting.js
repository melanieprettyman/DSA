/**
 * MERGE SORT
 *
 * Purpose: A divide-and-conquer algorithm that sorts an array.
 *
 *
 * Why It Works: Merge Sort breaks the array into halves until each subarray contains a
 * single element. Then it merges those subarrays to produce sorted arrays until the entire
 * array is merged back together.
 */
function mergeSort(arr) {
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

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

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
