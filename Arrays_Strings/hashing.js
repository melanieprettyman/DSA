/**
 * HASHING
 *
 * Purpose: Fast lookups, insertions, and deletions. Often used for counting or
 * tracking distinct elements.
 *
 * Code Example: Count distinct elements in an array.
 *
 * Why It Works: A Set in JavaScript automatically handles the storage of distinct elements.
 * When you try to add an element, the Set structure checks if it is already present and
 * ensures no duplicates.
 */

function countDistinct(arr) {
  const distinctElements = new Set();
  for (let num of arr) {
    distinctElements.add(num);
  }
  return distinctElements.size;
}
