/**
 * EUCLIDEAN ALGORITHM
 *
 * Purpose: finding the greatest common divisor (GCD) of two integers.
 *
 * Algorithm:
 *    1. Compute Remainder: Start by finding the remainder of a divided by b, denoted as a % b.
 *    2. Swap and Reduce: Replace a (big num) with b (small num) and b with a % b.
 *    3. Recursion or Iteration: Repeat the process with the new values of a and b.
 *    4. Termination: When b becomes 0, a contains the GCD
 *
 * Why It Works: GCD of two numbers also divides their difference. To find the GCD of two numbers a and b, where 𝑎≥𝑏, we repeatedly replace
 *               the larger number by its remainder when divided by the smaller number until one of the numbers becomes zero. The non-zero number
 *               at this point will be the GCD of a and b.
 */

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function gcd(big, small) {
  return small === 0 ? big : gcd(small, big % small);
}

// Reverse a number
function reverse(x) {
  let original = x;
  let reversed = 0;

  while (x > 0) {
    // Extract the last digit
    let lastDigit = original % 10;
    let remainder = reversed * 10;
    reversed = remainder + lastDigit;
    original = Math.floor(original / 10);
  }

  return reversed;
}
