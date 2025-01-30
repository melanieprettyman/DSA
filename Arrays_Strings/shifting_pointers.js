/**
 * SHIFTING POINTERS
 *
 * Purpose: Shifting pointers is useful for adjusting the focus within an array without
 * reprocessing the elements multiple times.
 *
 * Why It Works: This method first reverses the entire array, then reverses the first k elements
 * and the rest separately, effectively rotating the array by k places in an efficient manner.
 */
function rotateArray(arr, k) {
  k = k % arr.length; // In case the rotation count is greater than the array length
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  function reverse(subArr, start, end) {
    while (start < end) {
      [subArr[start], subArr[end]] = [subArr[end], subArr[start]];
      start++;
      end--;
    }
  }
}
