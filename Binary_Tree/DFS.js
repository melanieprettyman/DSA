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

// ---------------------------------------[PRACTICE]----------------------------------------
function dfs_(tree) {}
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

testDFS();
