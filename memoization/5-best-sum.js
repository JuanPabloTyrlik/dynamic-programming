const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let bestPath = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers, memo);
    if (result) {
      const path = [num, ...result];
      if (!bestPath || bestPath.length > path.length) bestPath = path;
    }
  }

  if (bestPath) bestPath.sort((a, b) => b - a);

  memo[targetSum] = bestPath;
  return bestPath;
};

// Complexity
// Brute Force
// Time: O(n^m * m)
// Space: O(m)
//
// Memoization
// Time: O(n * m^2)
// Space: O(m^2)

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
console.log(bestSum(300, [1, 2, 5, 25, 3, 7, 50, 90]));
