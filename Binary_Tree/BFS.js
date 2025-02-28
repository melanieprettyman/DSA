/**
 * BREATH FIRST SEARCH
 *
 * Purpose: searches tree from left to right. Good at finding shortest path (looks at closest node first). Takes up more memory.
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

// ---------------------------------------[PRACTICE]----------------------------------------
function bfs_(tree) {}
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

testBFS();
