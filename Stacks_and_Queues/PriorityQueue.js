/**
 * MAX HEAP (PRIORITY QUEUE)
 * Description: A specialized tree-based data structure where the largest element is always at the root node. It is particularly useful in scenarios
 *              that require frequent access to the maximum element.
 *
 * Use Cases:
 * - Implementing priority queues where the highest priority element needs to be accessed quickly.
 * - Scheduling algorithms for processing the most urgent tasks first.
 * - Bandwidth management to prioritize the processing of the largest packet.
 * - Managing data streams that require access to the largest or highest priority elements.
 *
 * Properties:
 * - Max-heap property: Each parent node's value is greater than or equal to the values of its child nodes. This property ensures quick access to
 *                      the maximum element, providing efficient O(1) lookup time for the maximum value.
 *
 * Operations:
 * - Insert (Push): Adds a new element to the end of the heap and then sifts this element up to restore the heap property if violated. (Time Complexity: O(log n))
 * - Extract Max (Pop): Removes the root element (the maximum element), replaces it with the last element in the heap, and then sifts this element down to restore the heap property. (Time Complexity: O(log n))
 * - Peek: Returns the maximum element without removing it from the heap. (Time Complexity: O(1))
 *
 * Heap Representation:
 * - The heap is typically represented as an array for efficient access and manipulation.
 *   - Parent Index: Math.floor((index-1)/2)
 *   - Left Child Index: (index * 2) + 1
 *   - Right Child Index: (index * 2) + 2
 *
 * Example of Heap Structure:
 * Consider a heap represented in an array format: [30, 20, 15, 5, 10, 5, 5, 5]
 * - 30 is the root.
 * - 20 and 15 are children of 30.
 * - 5, 10, and 5 are further down the hierarchy.
 */

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  // Helper to move the element at index up to its correct place in the heap
  _shiftUp() {
    let index = this.heap.length - 1;
    // While node is not root
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      // If node is greater than parent, swap
      if (this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Adds an element to the heap
  push(value) {
    this.heap.push(value);
    this._shiftUp();
  }

  // Helper to move the element at index down to its correct place in the heap
  _shiftDown() {
    let index = 0;
    let length = this.heap.length;
    let element = this.heap[0]; // root element

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // If left child is in array, and is greater than element, set swap to left child
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      // If right child is in array, swap has not been set and right child is greater than element OR right child is greater than left child, set right to swap
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      // Nothing to swap break
      if (swap === null) break;
      // swap
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }

  // Removes and returns the maximum element from the heap
  pop() {
    if (this.isEmpty()) {
      return undefined; // Explicitly return undefined or handle this case as needed.
    }
    const max = this.heap[0];
    const end = this.heap.pop();

    // If heap is not empty, set end as root, and sift down
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._shiftDown();
    }
    return max;
  }
}

// ---------------------------------------[PRACTICE]----------------------------------------
class PriorityQueue_ {
  constructor() {}

  isEmpty() {}

  // Helper to move the element at index up to its correct place in the heap
  _shiftUp() {}

  // Adds an element to the heap
  push(value) {}

  // Helper to move the element at index down to its correct place in the heap
  _shiftDown() {}

  // Removes and returns the maximum element from the heap
  pop() {}
}
// ---------------------------------------[TEST]----------------------------------------
function testPriorityQueue() {
  let pq = new PriorityQueue_();
  let results = [];
  let expected = [];
  let passed = true;

  // Test edge cases like popping from an empty heap first
  try {
    let res = pq.pop();
    results = res === undefined;
    console.log("Test Pop Empty: ", results ? "PASS" : "FAIL");
  } catch (error) {
    console.log("Test Pop Empty: FAIL", "| Error:", error.message);
  }

  // Regular push and pop tests...

  // Reset and perform regular tests after the edge case
  pq.push(20);
  pq.push(30);
  pq.push(10);
  pq.push(40);
  expected = [40, 30, 10, 20]; // The order in the heap array after all inserts

  // Check internal state of heap to confirm heap property
  results = pq.heap;
  passed = JSON.stringify(results) === JSON.stringify(expected);
  console.log(
    "Test Push: ",
    passed ? "PASS" : "FAIL",
    "| Expected:",
    expected,
    "Results:",
    results
  );

  // Test popping elements
  results = [];
  expected = [40, 30, 20, 10]; // Expected order of elements being popped

  while (!pq.isEmpty()) {
    results.push(pq.pop());
  }

  passed = JSON.stringify(results) === JSON.stringify(expected);
  console.log(
    "Test Pop: ",
    passed ? "PASS" : "FAIL",
    "| Expected:",
    expected,
    "Results:",
    results
  );
}

// Run tests
testPriorityQueue();
