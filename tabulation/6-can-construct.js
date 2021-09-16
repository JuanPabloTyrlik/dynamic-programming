const canConstruct = (targetWord, wordBank) => {
  const table = new Array(targetWord.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i]) {
      for (const word of wordBank) {
        if (targetWord.indexOf(word, i) === i) {
          table[i + word.length] = table[i];
        }
      }
    }
  }

  return table[targetWord.length];
};

// Complexity
// Tabulation
// Time: O(n * m^2)
// Space: O(m)

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
  ])
);
