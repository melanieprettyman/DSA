/**
 * PALINDROME
 *
 * Purpose: Determines whether a string or array is the same forward and backward.
 *
 * Why It Works: By comparing characters from the beginning and the end of the string
 * moving inward, you can determine if the string is symmetrical and thus a palindrome
 * without needing extra space.
 */

function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function testIsPalindrome() {
  const testCases = [
    { input: "racecar", expected: true },
    { input: "level", expected: true },
    { input: "hello", expected: false },
    { input: "A man a plan a canal Panama", expected: false }, // For an enhanced function, you may want to clean and lower the case to make it true.
    { input: "Madam, I'm Adam", expected: false }, // Similar enhancement as above could apply.
    { input: "", expected: true }, // Empty string is a palindrome by definition.
    { input: "a", expected: true }, // Single character is a palindrome.
    { input: "12321", expected: true }, // Numeric palindromes should also work.
    { input: "123456", expected: false },
  ];

  testCases.forEach((test, index) => {
    const { input, expected } = test;
    const result = myIsPalindrome(input);
    const passed = result === expected;
    console.log(
      `Test ${index + 1}: ${
        passed ? "Passed" : "Failed"
      } - Expected ${expected} and got ${result}`
    );
  });
}

function myIsPalindrome(s) {
  return 0;
}

// Run the test function
testIsPalindrome();
