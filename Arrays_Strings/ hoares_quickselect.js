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
