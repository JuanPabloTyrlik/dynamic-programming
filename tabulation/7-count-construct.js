const countConstruct = (targetWord, wordBank) => {
  const table = new Array(targetWord.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < table.length; i++) {
    if (table[i]) {
      for (const word of wordBank) {
        if (targetWord.indexOf(word, i) === i) {
          table[i + word.length] += table[i];
        }
      }
    }
  }

  return table[targetWord.length];
};

// Complexity
// Tabulation
// Time: O(n*m^2)
// Space: O(m)

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
);
