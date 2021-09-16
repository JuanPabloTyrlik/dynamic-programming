// Memoization

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// Complexity
// Brute Force
// Time: O(2^n)
// Space: O(n)
//
// Memoization
// Time: O(n)
// Space: O(n)

console.log('fib(3): ', fib(3));
console.log('fib(5): ', fib(5));
console.log('fib(7): ', fib(7));
console.log('fib(15): ', fib(15));
console.log('fib(35): ', fib(35));
console.log('fib(50): ', fib(50));
console.log('fib(75): ', fib(75));
