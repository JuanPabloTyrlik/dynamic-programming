const gridTraveler = (m, n, memo = {}) => {
  const key = m < n ? `${m},${n}` : `${n},${m}`;
  if (key in memo) return memo[key];
  if (n === 1 && m === 1) return 1;
  if (n === 0 || m === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

// Complexity
// Brute Force
// Time: O(2^(n+m))
// Space: O(n+m)
//
// Memoization
// Time: O(n*m)
// Space: O(n+m)

console.log('gridTraveler(2,3): ', gridTraveler(2, 3));
console.log('gridTraveler(3,2): ', gridTraveler(3, 2));
console.log('gridTraveler(3,3): ', gridTraveler(3, 3));
console.log('gridTraveler(5,5): ', gridTraveler(5, 5));
console.log('gridTraveler(10,10): ', gridTraveler(10, 10));
console.log('gridTraveler(15,15): ', gridTraveler(15, 15));
console.log('gridTraveler(20,20): ', gridTraveler(20, 20));
console.log('gridTraveler(100,100): ', gridTraveler(100, 100));
