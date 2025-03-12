/**
 * BREATH FIRST SEARCH
 *
 * Purpose: searches tree from left to right. Good at finding shortest path (looks at closest node first). Cons: takes up more memory.
 *
 * Algorithm:
 *    1. Initialize a Queue (FIFO): BFS uses a queue to keep track of the nodes to visit next.
 *    2. Start From the Root: If the binary tree is not empty, enqueue the root node of the tree.
 *    3. Loop Until the Queue is Empty:
 *        i.Dequeue a Node: Remove the node from the front of the queue.
 *        ii. Process the Current Node:
 *              -Typically printing the node's value or storing it in a data structure
 *              - This step can also include checking conditions or applying operations relevant to the specific problem you are solving.
 *        iii. Enqueue Child Nodes:
 *              - If the current node has a left child, enqueue it.
 *              - If the current node has a right child, enqueue it too.
 *              - Make sure to enqueue the children in the order of their appearance (left first, then right) to maintain the level-order sequence.
 *        iiii. Repeat: Continue dequeuing a node and enqueuing its children until the queue is empty.
 *
 * Big O: O(n)
 */

function bfs(tree) {
  // If tree is empty, return nothing
  if (!tree.root) {
    return null;
  }

  // Initialize queue with tree root
  let queue = [];
  queue.push(tree.root);

  //Init processing data structure for storing bfs tree
  let bfs_list = [];

  //Loop until queue is empty
  while (queue.length > 0) {
    //Remove first node from queue
    const node = queue.shift();

    //Process node (for example add to arr)
    bfs_list.push(node);

    //From left to right, visit children
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return bfs_list;
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

/*
    2D Array BFS

    1. Initialize a Queue: BFS uses a queue to track the cells to explore next.
    2. Start from a Starting Cell: Typically, you're given a start position in the grid.
    3. Loop Until the Queue is Empty:
        i. Dequeue the front cell.
        ii. Process this cell (e.g., check if it's the target or mark it as visited).
        iii. Enqueue all adjacent cells that are within bounds and meet certain conditions (e.g., not already visited, not blocked).

    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ];

    Grid where 0 represents an open cell and 1 represents a blocked cell. Count all reachable cells from a given starting point.
 */
function bfsIn2DArray(grid, startRow, startCol) {
  // Start row is blocked
  if (grid[startRow][startCol] === 1) {
    return 0;
  }

  const directions = [
    [0, 1], // Up
    [0, -1], // Down
    [1, 0], // Right
    [-1, 0], // Left
  ];

  let queue = [];
  // Enque starting position
  queue.push([startRow, startCol]);
  grid[startRow][startCol] = 1; // Mark the starting cell as visited by setting it to 1
  let count = 1; // Start from the initial cell.

  const rows = grid.length;
  const cols = grid[0].length;

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();

    // Explore all four possible directions
    for (const [dRow, dCol] of directions) {
      const newRow = currentRow + dRow;
      const newCol = currentCol + dCol;

      // Check boundaries and if the cell is open.
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 0
      ) {
        grid[newRow][newCol] = 1; // Mark as visited
        queue.push([newRow, newCol]); // Enqueue for further exploration.
        count++; // Increment the count of reachable cells.
      }
    }
  }
  return count;
}

// ---------------------------------------[PRACTICE]----------------------------------------
function bfs_(tree) {}

function bfsIn2DArray_(grid, startRow, startCol) {}
// ---------------------------------------[TEST]----------------------------------------

function testBFS() {
  // Create a binary tree
  let tree = new BinaryTree();
  tree.root = new TreeNode(1);
  tree.root.left = new TreeNode(2);
  tree.root.right = new TreeNode(3);
  tree.root.left.left = new TreeNode(4);
  tree.root.left.right = new TreeNode(5);
  tree.root.right.left = new TreeNode(6);
  tree.root.right.right = new TreeNode(7);

  // Expected BFS order of values
  const expected = [1, 2, 3, 4, 5, 6, 7];

  // Execute BFS
  const result = bfs_(tree);

  // Check if the BFS output matches the expected output
  if (result.length !== expected.length) {
    console.error("Failed: BFS output length does not match expected length.");
    return;
  }

  for (let i = 0; i < expected.length; i++) {
    if (result[i].value !== expected[i]) {
      console.error(
        `Failed: Expected node value of ${expected[i]} but got ${result[i].value} at index ${i}.`
      );
      return;
    }
  }

  console.log("Passed: BFS returned correct order.");
}
function testBfsIn2DArray() {
  // Test Case 1: Simple open grid
  let grid1 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let result1 = bfsIn2DArray_(grid1, 0, 0);
  console.log("Test 1 (Expecting 9):", result1); // Should visit all cells

  // Test Case 2: Grid with blocks
  let grid2 = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  let result2 = bfsIn2DArray_(grid2, 0, 0);
  console.log("Test 2 (Expecting 7):", result2); // Should visit 3 open cells in the first column

  // Test Case 3: Starting at a blocked cell
  let grid3 = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let result3 = bfsIn2DArray_(grid3, 0, 0);
  console.log("Test 3 (Expecting 0):", result3); // Should not move anywhere

  // Test Case 4: Large grid, start position surrounded by blocks
  let grid4 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  let result4 = bfsIn2DArray_(grid4, 1, 1);
  console.log("Test 4 (Expecting 1):", result4); // Only the start position is reachable

  // Test Case 5: Edge start with no blocks
  let grid5 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  let result5 = bfsIn2DArray_(grid5, 2, 2);
  console.log("Test 5 (Expecting 9):", result5); // Should visit all cells starting from the corner
}

testBfsIn2DArray();

testBFS();
