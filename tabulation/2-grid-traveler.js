// 2D grid that can only be travelled right or down

const gridTraveler = (rows, columns) => {
  const table = new Array(rows).fill().map(() => new Array(columns).fill(0));
  table[0][0] = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i + 1 < rows) table[i + 1][j] += table[i][j];
      if (j + 1 < columns) table[i][j + 1] += table[i][j];
    }
  }

  return table[rows - 1][columns - 1];
};

// Tabulation
// Complexity
// Time: O(n*m)
// Space: O(n*m)

console.log('gridTraveler(2,3): ', gridTraveler(2, 3));
console.log('gridTraveler(3,2): ', gridTraveler(3, 2));
console.log('gridTraveler(3,3): ', gridTraveler(3, 3));
console.log('gridTraveler(5,5): ', gridTraveler(5, 5));
console.log('gridTraveler(10,10): ', gridTraveler(10, 10));
console.log('gridTraveler(15,15): ', gridTraveler(15, 15));
console.log('gridTraveler(20,20): ', gridTraveler(20, 20));
console.log('gridTraveler(100,100): ', gridTraveler(100, 100));
