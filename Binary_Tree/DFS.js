/**
 * DEPTH FIRST SEARCH
 *
 * Purpose: explores as far as possible along 1 branch before backtracking to nearest ancestor w. an unexplored child. Good at asking "Does the path exist from
 *          src -> target". Use when a tree is very wide, or to determine if a path exists between two node. Cons: Less memory, can get slow.
 *
 * Algorithm:
 *    1. Initialize a data structure like array
 *    2. Start From the Root: return the product of recursively traversing with array
 *    3. In order traveral:
 *        i.Check that the node exists
 *        ii. Traverse left subtree
 *        iii. Process the node (add to array)
 *        iiii.Traverse right subtree
 *        iiiii. Return list
 *
 * Big O: O(n)
 */

function dfs(tree) {
  return inOrderTraversal(tree.root, []);
}

function inOrderTraversal(node, result) {
  // Check if node is a leaf, or tree is empty
  if (node === null) {
    return;
  }
  // Recurse left subtree
  inOrderTraversal(node.left, result);

  // Process node
  result.push(node.value);

  // Recurse right subtree
  inOrderTraversal(node.right, result);

  return result;
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
  Depth First Search (DFS) Algorithm for a 2D Array

  Explore as far as possible in 1 direction. Explore that direction until hit outter wall or going back to an element we've seen before

  [
    [1, 2, 3, 4, 5],      ---------------->
    [6, 7, 8, 9, 10],     |   ^   |   ^   |   
    [11,12,13,14,15],     |   |   |   |   |
    [16,17,18,19,20]      V   |   V   |   V
  ]

  dfs = [1,2,3,4,5,10,15,20,19,14,9,8,13,18,7,12,17,6,11,16]

  1. Initialization: Start from a given cell in the grid, and use a stack (explicit or implicit via recursion) to explore cells.
  2. Recursion/Stack Usage: Dive deep into each direction until you hit boundaries or blocked paths.
  3. Backtracking: Once you reach a cell with no further moves, backtrack to explore new paths from previous cells.
  4. Mark Visits: Keep track of visited cells to avoid cycles and redundant work.

*/

const matrixTraverseDFS = function (matrix) {
  //create array with row count, fill with 0's. For each 0, create a new array of size col and fill with flase
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  matrixDFS(matrix, 0, 0, seen, values);

  return values;
};

function matrixDFS(matrix, row, col, seen, values) {
  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1], //left
  ];

  // Base case: check if we hit a wall or have seen this cell
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    return;
  }

  // Add current value to values. Update seen
  seen[row][col] = true;
  values.push(matrix[row][col]);

  for (const [dRow, dCol] of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;
    matrixDFS(matrix, newRow, newCol, seen, values);
  }
}
// ---------------------------------------[PRACTICE]----------------------------------------
function dfs_(tree) {}
const matrixTraverseDFS_ = function (matrix) {};
// ---------------------------------------[TEST]----------------------------------------

function testDFS() {
  let tree = new BinaryTree();
  tree.root = new TreeNode(1);
  tree.root.left = new TreeNode(2);
  tree.root.right = new TreeNode(3);
  tree.root.left.left = new TreeNode(4);
  tree.root.left.right = new TreeNode(5);
  tree.root.right.left = new TreeNode(6);
  tree.root.right.right = new TreeNode(7);

  const expectedInOrder = [4, 2, 5, 1, 6, 3, 7];
  const result = dfs_(tree);

  // Check if the DFS output matches the expected pre-order traversal
  if (result.length !== expectedInOrder.length) {
    console.error("Failed: DFS output length does not match expected length.");
    return;
  }
  for (let i = 0; i < expectedInOrder.length; i++) {
    if (result[i] !== expectedInOrder[i]) {
      console.error(
        `Failed: Expected node value of ${expectedInOrder[i]} but got ${result[i]} at index ${i}.`
      );
      return;
    }
  }

  console.log("Passed: DFS returned correct pre-order traversal.");
}

function testMatrixTraverseDFS() {
  console.log("Testing matrixTraverseDFS...");

  // Test 1: Empty Matrix
  let matrix1 = [];
  let result1 = matrixTraverseDFS_(matrix1);
  console.log("Test 1 - Empty Matrix:", result1.length === 0 ? "Pass" : "Fail");

  // Test 2: Single Element Matrix
  let matrix2 = [[5]];
  let result2 = matrixTraverseDFS_(matrix2);
  console.log(
    "Test 2 - Single Element Matrix:",
    result2.length === 1 && result2[0] === 5 ? "Pass" : "Fail"
  );

  // Test 3: Non-Square Matrix
  let matrix6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let result6 = matrixTraverseDFS_(matrix6);
  console.log(
    "Test 3 - Non-Square Matrix:",
    JSON.stringify(result6) === JSON.stringify([1, 2, 3, 6, 9, 8, 5, 4, 7])
      ? "Pass"
      : "Fail"
  );
}

testMatrixTraverseDFS();

testDFS();
