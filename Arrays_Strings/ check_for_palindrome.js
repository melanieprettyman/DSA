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
