/**
 * LINKED LISTS
 * 
 *
 Types of Linked Lists
    - Singly Linked Lists: Each node contains data and a pointer to the next node in the sequence. This is the simplest form of a linked list.
          [x]->[x]->[x]->[x]->null
           ^              ^
           |              |
          head           tail
    - Doubly Linked Lists: Nodes contain a pointer to both the next and the previous nodes. This allows for traversal in both directions.
         null<-[x]<->[x]<->[x]<->[x]->null
                ^                 ^
                |                 |
               head              tail
    - Circular Linked Lists: The last node points back to the first node, making the list circular. This can be singly or doubly linked.

 Basic Operations
    - Insertion:  O(1) for head, O(n) for middle/end
    - Deletion:  O(1) for head, O(n) for middle/end
    - Search: O(n) Finding a node or retrieving data from the list requires traversing the list from the beginning
    - Traversal: (O(n) Walking through each node to perform operations like printing or modifying node values.
  
  Pros: dynamic data structure, efficient Memory Usage, ease of Insertion/Deletion
  Cons: lots of memory overhead (every node needs extra memory for its pointer(s)), No Random Access (can't direct or random access to the nodes), Slower Access Time: access times are linear (O(n)
  

  Problems: 
    -Always has a head. LL problems recieve it's head and return a LL via it's head. 
    -Don't always have a tail

  LL Algorithm: 
   
    class ListNode(val, next) {
       this.val = (val)
       this.next = (next)
    }

    function(head){
        let currentNode = head; 

        while(currentNode !== null){
        
          {PREFORM OPERATION}
        
          currentNode = currentNode.next; 
        
        }
    
    }
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// example [1]->[2]->[3]->[4]->null
function reverseLinkedList(head) {
  let prev = null; // first iteration, prev should terminator
  let current = head;

  while (current) {
    //temp of the next node
    let next = current.next; // next = [2]->[3]->[4]->null
    //set the current nodes 'next' to be the node before it (reversing it)
    current.next = prev; // [1]->null
    //set prev to the current node for the next iteration
    prev = current; // prev = [1]->null
    //reset head
    current = next; // current = [2]->[3]->[4]->null
  }
  //prev is the new head
  return prev;
}

//Given the head of a LL, return the node where the cycle begins. If there is no cycle, return null.
/*
            [1]
             ↓
            [2]
             ↓
            [3]
            ↙ ↖
          [4] [8] 
           ↓   ↑
          [5] [7] 
           ↘  ↗
            [6]
  
 FLOYD'S TORTOISE AND HARE ALGORITHM
    -tortis ptr: moves 1 step
    -hare ptr: moves 2 steps
    -If tortis and hare overlap/meet at same node, we have a cycle
    -If hare.next or hare = null, no cylcle

  How to find the node where the cycle begins (3)?
    1. Run Floyd's T&H algo, meet at node 7. 
    2. Init two pts again. p1=head p2=meeting point
    3. Once p1 and p2 meet, this node is the start of the cycle
 
 */

const findCycle = function (head) {
  if (!head) return null;

  let tortoise = head,
    hare = head;

  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;

    if (hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }

    if (tortoise === hare) break;
  }

  let p1 = head,
    p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
};

/*
1. Initial Setup: 
    - prehead is a standalone node: prehead -> -1 -> null
    - Setting prev = prehead means both prev and prehead point to the same node: the -1 node.

2. Modification Through prev
    - When you do prev.next = l1, you're not only changing where prev.next points but also where prehead.next points because prev and prehead 
      refer to the same node at this stage.
    - So, after prev.next = l1, the list looks like: prehead -> -1 -> l1. Now, prehead.next points to l1.  

4. Building the List
    - As you iterate through l1 and l2, prev keeps moving forward, linking nodes together, and prehead remains at the start. The entire sequence 
      of nodes linked by prev is accessible via prehead.next.

  So prehead is always pointing to the start of the LL and prev is the tail of the new list. 
 */
function mergeTwoLists(l1, l2) {
  // Create a prehead node that will help simplify edge cases
  let prehead = new ListNode(-1);

  // Maintain an iterator for the list being constructed
  let prev = prehead;

  // Compare elements from l1 and l2 and append the smaller one to the merged list
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // At the end of the loop, connect the remaining part of l1 or l2
  // Only one of l1 or l2 can have remaining elements, since the other will be null
  prev.next = l1 === null ? l2 : l1;

  return prehead.next; // Return the merged list, excluding the prehead
}

class DListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //Add new node to end of list
  append(data) {
    const newNode = new DListNode(data);

    //if the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //Swap new node and tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  //Add new node to beginging of list
  prepend(data) {
    const newNode = new DListNode(data);

    //if the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //Swap new node and head
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  remove(data) {
    if (!this.head) {
      return; // If list is empty
    }
    let current = this.head;
    while (current) {
      if (current.data === data) {
        //found node to remove
        if (current.next) {
          current.prev.next = current.next;
        }
        if (current.prev) {
          current.next.prev = current.prev;
        }
        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }
}
// ---------------------------------------[PRACTICE]----------------------------------------
// example [1]->[2]->[3]->[4]->null
function reverseLinkedList_(head) {}
//Given the head of a LL, return the node where the cycle begins. If there is no cycle, return null.
const findCycle_ = function (head) {};
function mergeTwoLists_(l1, l2) {}

class DListNode_ {}
class DoublyLinkedList_ {
  //Add new node to end of list
  append(data) {}
  //Add new node to beginging of list
  prepend(data) {}
  remove(data) {}
  // Print the list data from head to tail
  printForward() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }
    return result + "null";
  }

  // Print the list data from tail to head
  printBackward() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }
    return result + "null";
  }
}
// ---------------------------------------[TEST]----------------------------------------

function testReverseLinkedList() {
  // Create a simple linked list 1->2->3->null
  const head = new ListNode(1, new ListNode(2, new ListNode(3)));

  // Reverse the list
  const reversedHead = reverseLinkedList_(head);

  // Verify that the reversed list is 3->2->1->null
  let correctOrder = [3, 2, 1];
  let node = reversedHead;
  let index = 0;
  let pass = true;
  while (node !== null) {
    if (node.val !== correctOrder[index]) {
      pass = false;
      break;
    }
    node = node.next;
    index++;
  }

  console.log("Test Reverse Linked List:", pass ? "PASS" : "FAIL");
}

// testReverseLinkedList();

function testFindCycle() {
  // List with a cycle: 1->2->3->4->5->3...
  const first = new ListNode(1);
  const second = new ListNode(2);
  const third = new ListNode(3);
  const fourth = new ListNode(4);
  const fifth = new ListNode(5);
  first.next = second;
  second.next = third;
  third.next = fourth;
  fourth.next = fifth;
  fifth.next = third; // Cycle starts here

  const result = findCycle_(first);
  console.log("Test Find Cycle:", result === third ? "PASS" : "FAIL");
}

// testFindCycle();

function testMergeTwoLists() {
  // List 1: 1->3->5
  const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));

  // List 2: 2->4->6
  const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

  // Merge the lists
  const mergedHead = mergeTwoLists_(list1, list2);

  // Verify that the merged list is 1->2->3->4->5->6
  let correctOrder = [1, 2, 3, 4, 5, 6];
  let node = mergedHead;
  let index = 0;
  let pass = true;
  while (node !== null) {
    if (node.val !== correctOrder[index]) {
      pass = false;
      break;
    }
    node = node.next;
    index++;
  }

  console.log("Test Merge Two Lists:", pass ? "PASS" : "FAIL");
}

function testDoublyLinkedList() {
  const list = new DoublyLinkedList_();
  list.append(10);
  list.append(20);
  list.append(30);
  list.prepend(0);
  const result1 = list.printForward(); // 0 <-> 10 <-> 20 <-> 30 <-> null
  console.log(
    "Test 1:",
    result1 === "0 <-> 10 <-> 20 <-> 30 <-> null" ? "PASS" : "FAIL"
  );
  const result2 = list.printBackward(); // 30 <-> 20 <-> 10 <-> 0 <-> null
  console.log(
    "Test 2:",
    result2 === "30 <-> 20 <-> 10 <-> 0 <-> null" ? "PASS" : "FAIL"
  );
  list.remove(20);
  const result3 = list.printForward(); // 0 <-> 10 <-> 30 <-> null
  console.log(
    "Test 3:",
    result3 === "0 <-> 10 <-> 30 <-> null" ? "PASS" : "FAIL"
  );
}

testDoublyLinkedList();
// testMergeTwoLists();
