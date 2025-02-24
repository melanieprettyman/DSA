/* STACKS

  Purpose: When the order data is retreved matters

  Why it works: Think of stack of plates. You can only access and add to the top. "Last in, first out" : LIFO

  Properties:
    - look up -> O(n)
    - pop (remove last item) -> O(1)
    - push (add an item) -> O(1)
    - peek (view top item) -> O(1)

  Example: 
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
    Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.Every close bracket has a corresponding 
    open bracket of the same type.

    Valid: "{ ( [ ] ) }" , "{ [ ]  ( ) }" , " "
    Invalid" "{ ( [ ) }" , "{ ( [ ] }"

    Why a stack? -> Put all the open brackets in stack. As soon a we see a closing bracket, look at the last seen opening bracket 
                    and see if they are a match (LIFO). So for "{ ( [ ] ) }", our stack would contain ["{"", "("", "["" ], we encounter "]", 
                    pop our stack and get "[". "[" and "]" are a match!

 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Hashmap w key (Opening bracket): value (Closing bracket)
  const parens = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  // Edge case: empty string
  if (s.length === 0) {
    return true;
  }

  const stack = [];

  //CASE: check for matching brackets
  for (let i = 0; i < s.length; i++) {
    // If i is an open bracket, add to stack
    if (parens.has(s[i])) {
      stack.push(s[i]);
    } else {
      //Else this is a closing bracket, pop most resent paren in stack and compare
      const open = stack.pop();
      const correctClose = parens.get(open);
      if (s[i] !== correctClose) {
        return false;
      }
    }
  }
  //CASE: opening bracket does not having a closing bracket (stack would not be empty)
  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
};

function testIsValid() {
  // Test Case 1: Empty String
  console.assert(
    my_isValid("") === true,
    "Test Case 1 Failed: Empty string should be valid"
  );

  // Test Case 2: Balanced Brackets
  console.assert(
    my_isValid("()") === true,
    "Test Case 2 Failed: '()' should be valid"
  );
  console.assert(
    my_isValid("()[]{}") === true,
    "Test Case 2 Failed: '()[]{}' should be valid"
  );
  console.assert(
    my_isValid("{[()]}") === true,
    "Test Case 2 Failed: '{[()]}' should be valid"
  );

  // Test Case 3: Unbalanced Brackets
  console.assert(
    my_isValid("(]") === false,
    "Test Case 3 Failed: '(]' should be invalid"
  );
  console.assert(
    my_isValid("([)]") === false,
    "Test Case 3 Failed: '([)]' should be invalid"
  );
  console.assert(
    my_isValid("{[](") === false,
    "Test Case 3 Failed: '{[](' should be invalid"
  );

  // Test Case 4: Incorrectly Nested Brackets
  console.assert(
    my_isValid("{[(])}") === false,
    "Test Case 4 Failed: '{[(])}' should be invalid"
  );

  // Final test to ensure non-empty stack is caught
  console.assert(
    my_isValid("((((") === false,
    "Test Case 5 Failed: '((((' should be invalid because of non-empty stack"
  );

  console.log("All tests completed.");
}

/**
 * @param {string} s
 * @return {boolean}
 */
var my_isValid = function (s) {};

testIsValid();
