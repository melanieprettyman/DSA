/**
 * BINARY TREE
 * 
 * o(log n)
 *
 * Binary Tree Types:
    - Full Binary Tree: Every node other than the leaves has two children.
    - Complete Binary Tree: All levels are completely filled except possibly for the last level, which is filled from left to right.
    - Perfect Binary Tree: A binary tree in which all interior nodes have two children and all leaves are at the same level.
    - Balanced Binary Tree: A binary tree where the height of the two subtrees of any node differ by no more than one.

   Properties
    - Depth of a Node: The number of edges from the node to the tree's root node.
    - Height of a Node: The number of edges on the longest path from the node to a leaf. The height of the tree is the height of the root.
    - Level: The set of nodes at a particular depth. 

    Input: K = 25, 
              5
          /      \
        10       15
      /   \      /   \
    20    25    30   35
            \
            45
    Output:
      Depth of node 25 = 2
      Height of node 25 = 1

    Find the depth of the given node:
      1. Initialize a variable, say dist as -1.
      2. Check if the node K is equal to the given node.
      3. Otherwise, check if it is present in either of the subtrees, by recursively checking for the left and right subtrees respectively.
      4. If found to be true, print the value of dist + 1.
      5. Otherwise, print dist.
    
    Find the height of the given node:
      1. Calculate the height of the left subtree recursively.
      2. Calculate the height of the right subtree recursively.
      3. Update height of the current node by adding 1 to the maximum of the two heights obtained in the previous step. Store the height in a variable, say ans.
      4. If the current node is equal to the given node K, print the value of ans as the required answer.

    Traversal Techniques
      Traversal is the process of visiting all the nodes of a binary tree and performing an operation (such as display, summation, etc.) at each node. 

        - In-order (Left, Root, Right): Traverse the left subtree, visit the root, then traverse the right subtree.
        - Pre-order (Root, Left, Right): Visit the root, traverse the left subtree, then traverse the right subtree.
        - Post-order (Left, Right, Root): Traverse the left subtree, traverse the right subtree, then visit the root.
        - Level-order: Visit every node on a level before moving to a lower level (Breadth-First Search).

 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // Create node
    const newNode = new TreeNode(value);

    //Check if the Tree is Empty
    if (!this.root) {
      this.root = newNode; // the new node becomes the root.
    } else {
      this.insertNode(this.root, newNode); // Otherwise, Find the Correct Position
    }
  }

  insertNode(currentNode, newNode) {
    // Compares the new value with the current node's value. If the new value is smaller, it goes to the left subtree.
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        // if the left child is null, it inserts the new node there.
        currentNode.left = newNode;
      } else {
        // Otherwise, it recursively calls insertNode on the left child.
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      // Repeat on right side for values greater than current node
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }

  delete(value) {
    // recursive function that searches for the node to delete and restructures the tree accordingly
    this.deleteNode(this.root, value);
  }

  deleteNode(currentNode, value) {
    // Case 0: value does not exist in the tree, stops recursion when we reach the bottom of the tree
    if (currentNode === null) {
      return null;
    }
    // Recurese left side of tree if value is smaller than current node
    if (value < currentNode.value) {
      currentNode.left = this.deleteNode(currentNode.left, value);
    } else if (value > currentNode.value) {
      // Recurese right side of tree if value is larger than current node

      currentNode.right = this.deleteNode(currentNode.right, value);
    } else {
      // Case 1: The Node is a Leaf (No Children)

      if (currentNode.left === null && currentNode.right === null) {
        return null; // Directly return null when deleting a leaf node
      } else if (currentNode.left === null) {
        // If the node only has a right child, it is replaced by its right child.
        return currentNode.right;
      } else if (currentNode.right === null) {
        // If the node only has a left child, it is replaced by its left child.
        return currentNode.left;
      } else {
        // Case 3: The Node Has Two Children
        // Find the smallest node in the right subtree

        let aux = this.findMinNode(currentNode.right);
        // Copy that smallest node’s value into the current node.

        currentNode.value = aux.value;
        // Recursively delete the smallest node from the right subtree.

        currentNode.right = this.deleteNode(currentNode.right, aux.value);
      }
    }
    return currentNode; // Return the node itself to link back correctly
  }

  findMinNode(currentNode) {
    // This function finds the smallest node in a subtree by moving left until it reaches a leaf node.
    while (currentNode && currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  //TRAVERSAL

  // In-Order (left-child, parent, right-child)
  inOrder() {
    return this.inOrderTraversal(this.root, []);
  }

  inOrderTraversal(currentNode, result) {
    if (currentNode !== null) {
      this.inOrderTraversal(currentNode.left, result);
      result.push(currentNode.value);
      this.inOrderTraversal(currentNode.right, result);
    }
    return result;
  }

  // Pre-Order (parent, left-child, right-child)
  preOrder() {
    return this.preOrderTraversal(this.root, []);
  }

  preOrderTraversal(currentNode, result) {
    if (currentNode !== null) {
      result.push(currentNode.value);
      this.preOrderTraversal(currentNode.left, result);
      this.preOrderTraversal(currentNode.right, result);
    }
    return result;
  }

  // Post-Order (left-child, right-child, parent)
  postOrder() {
    return this.postOrderTraversal(this.root, []);
  }

  postOrderTraversal(currentNode, result) {
    if (currentNode !== null) {
      this.postOrderTraversal(currentNode.left, result);
      this.postOrderTraversal(currentNode.right, result);
      result.push(currentNode.value);
    }
    return result;
  }
}

// A balanced tree is one where the height difference between the left and right subtrees of any node is at most 1.
// https://media.geeksforgeeks.org/wp-content/uploads/20240805164549/balance-vs-unbalance-binnary-tree.webp
// Function to calculate the height of a tree
function height(node) {
  // Base case: Height of empty tree is zero
  if (node === null) return 0;

  // Height = 1 + max of left height and right heights
  return 1 + Math.max(height(node.left), height(node.right));
}

function isBalanced(root) {
  // If tree is empty then return true
  if (root === null) return true;

  // Get the height of left and right subtrees
  let lHeight = height(root.left);
  let rHeight = height(root.right);

  // If absolute height difference is greater than 1
  // Then return false
  if (Math.abs(lHeight - rHeight) > 1) return false;

  // Recursively check the left and right subtrees
  return isBalanced(root.left) && isBalanced(root.right);
}

function maxDepth(node) {
  //Empty tree or leaf node (no children so 0 depth)
  if (node === null) {
    return 0;
  }
  // Recurse down left and right subtrees
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

function areIdentical(root1, root2) {
  // Case 1: Both trees are empty or we have reached a leaf
  if (root1 === null && root2 === null) {
    return true;
  }
  // Case 2: 1 tree is empty
  if (root1 === null || root2 === null) {
    return false;
  }
  // Recursively check if the values are equal and that both subtrees are equal
  return (
    root1.value === root2.value &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right, root2.right)
  );
}

// ---------------------------------------[PRACTICE]----------------------------------------

class TreeNode_ {}

class BinarySearchTree_ {
  insert(value) {}

  insertNode(currentNode, newNode) {}

  delete(value) {}

  deleteNode(currentNode, value) {}

  findMinNode(currentNode) {}

  //TRAVERSAL

  inOrder() {}

  inOrderTraversal(currentNode, result) {}

  preOrder() {}

  preOrderTraversal(currentNode, result) {}

  postOrder() {}

  postOrderTraversal(currentNode, result) {}
}

function isBalanced_(root) {}

function maxDepth_(node) {}

function areIdentical_(root1, root2) {}

// ---------------------------------------[TEST]----------------------------------------

function testBSTInsertionAndStructure() {
  const bst = new BinarySearchTree_();
  bst.insert(50);
  bst.insert(30);
  bst.insert(20);
  bst.insert(40);
  bst.insert(70);
  bst.insert(60);
  bst.insert(80);

  const inOrderResult = bst.inOrder();
  console.log(
    "Test BST Insertion and Structure - Expected [20, 30, 40, 50, 60, 70, 80], got:",
    inOrderResult
  );
}

testBSTInsertionAndStructure();

function testBSTDeletion() {
  const bst = new BinarySearchTree_();
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(20);
  bst.insert(40);
  bst.insert(60);
  bst.insert(80);

  bst.delete(20); // leaf
  bst.delete(30); // one child
  bst.delete(70); // two children
  const inOrderResultAfterDeletion = bst.inOrder();
  console.log(
    "Test BST Deletion - Expected [40, 50, 60, 80], got:",
    inOrderResultAfterDeletion
  );
}

testBSTDeletion();

function testMaxDepth() {
  const bst = new BinarySearchTree_();
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(20);
  bst.insert(40);
  bst.insert(60);
  bst.insert(80);

  const depth = maxDepth_(bst.root);
  console.log("Test Max Depth - Expected depth: 3, got:", depth);
}

testMaxDepth();

function testIdenticalTrees() {
  const bst1 = new BinarySearchTree_();
  bst1.insert(50);
  bst1.insert(30);
  bst1.insert(70);

  const bst2 = new BinarySearchTree_();
  bst2.insert(50);
  bst2.insert(30);
  bst2.insert(70);

  const bst3 = new BinarySearchTree_();
  bst3.insert(50);
  bst3.insert(30);
  bst3.insert(71);

  console.log(
    "Test Identical Trees (Should be true):",
    areIdentical_(bst1.root, bst2.root)
  );
  console.log(
    "Test Identical Trees (Should be false):",
    areIdentical_(bst1.root, bst3.root)
  );
}

testIdenticalTrees();
