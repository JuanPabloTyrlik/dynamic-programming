// Tabulation
const fib = (n) => {
  const table = new Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

// Tabulation
const fibOptimized = (n) => {
  let current = 0,
    next = 1;

  for (let i = 1; i <= n; i++) {
    next += current;
    current = next - current;
  }

  return current;
};

// Complexity
// Tabulation (Basic)
// Time: O(n)
// Space: O(n)
//
// Tabulation (Optimized)
// Time: O(n)
// Space: O(1)

console.log('fib(3): ', fib(3));
console.log('fib(5): ', fib(5));
console.log('fib(7): ', fib(7));
console.log('fib(15): ', fib(15));
console.log('fib(35): ', fib(35));
console.log('fib(50): ', fib(50));
console.log('fib(75): ', fib(75));

console.log('fibOptimized(0): ', fibOptimized(0));
console.log('fibOptimized(1): ', fibOptimized(1));
console.log('fibOptimized(2): ', fibOptimized(2));
console.log('fibOptimized(3): ', fibOptimized(3));
console.log('fibOptimized(5): ', fibOptimized(5));
console.log('fibOptimized(7): ', fibOptimized(7));
console.log('fibOptimized(15): ', fibOptimized(15));
console.log('fibOptimized(35): ', fibOptimized(35));
console.log('fibOptimized(50): ', fibOptimized(50));
console.log('fibOptimized(75): ', fibOptimized(75));
