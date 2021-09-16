const allConstruct = (targetWord, wordBank) => {
  const table = new Array(targetWord.length + 1).fill().map(() => []);
  table[0] = [[]];

  for (let i = 0; i < table.length; i++) {
    if (table[i].length) {
      for (const word of wordBank) {
        if (targetWord.indexOf(word, i) === i) {
          const combination = table[i].map((combination) => [
            ...combination,
            word,
          ]);

          table[i + word.length].push(...combination);
        }
      }
    }
  }

  return table[targetWord.length];
};

// Complexity
// Tabulation
// Time: O(n^m)
// Space: O(n^m)
// n = targetWord.length
// m = wordBank.length

console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);
console.log(
  allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
  allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
