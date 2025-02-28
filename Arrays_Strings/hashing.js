/**
 * HASHING
 *
 * Purpose: Fast lookups, insertions, and deletions. Often used for counting or
 * tracking distinct elements.
 *
 * Code Example: Implement a hashmap class.
 */

class HashMap {
  constructor() {
    this.map = {}; // Using an object to simulate the hash map
  }

  /** Inserts a (key, value) pair into the HashMap. If the key already exists, update the corresponding value.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  set(key, value) {
    this.map[key] = value;
  }

  /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.map[key] !== undefined) {
      return this.map[key];
    } else {
      return -1;
    }
  }

  /** deletes the mapping of the specified value key if this map contains a mapping for the key.
   * @param {number} key
   * @return {void}
   */
  delete(key) {
    return delete this.map[key];
  }
}
// ---------------------------------------[PRACTICE]----------------------------------------
class HashMap_ {}
// ---------------------------------------[TEST]----------------------------------------

function testHashMap() {
  let errors = [];
  const hashMap = new HashMap_();

  // Test set and get functionality
  hashMap.set(1, 100);
  if (hashMap.get(1) !== 100) {
    errors.push(
      `Test failed: Expected hashMap.get(1) to return 100, got ${hashMap.get(
        1
      )}`
    );
  }

  // Test update functionality
  hashMap.set(1, 200);
  if (hashMap.get(1) !== 200) {
    errors.push(
      `Test failed: Expected hashMap.get(1) to return 200, got ${hashMap.get(
        1
      )}`
    );
  }

  // Test absent key
  if (hashMap.get(2) !== -1) {
    errors.push(
      `Test failed: Expected hashMap.get(2) to return -1, got ${hashMap.get(2)}`
    );
  }

  // Test delete functionality
  hashMap.delete(1);
  if (hashMap.get(1) !== -1) {
    errors.push(
      `Test failed: Expected hashMap.get(1) to return -1 after removal, got ${hashMap.get(
        1
      )}`
    );
  }

  // Output the results
  if (errors.length > 0) {
    errors.forEach((error) => console.error(error));
  } else {
    console.log("All tests passed!");
  }
}

testHashMap();

/**
 * SETS
 *
 * Purpose: A Set in JavaScript automatically handles the storage of distinct elements.
 * When you try to add an element, the Set structure checks if it is already present and
 * ensures no duplicates.
 *
 * Code Example: Count distinct elements in an array.
 */

function countDistinct(arr) {
  const distinctElements = new Set();
  for (let num of arr) {
    distinctElements.add(num);
  }
  return distinctElements.size;
}
