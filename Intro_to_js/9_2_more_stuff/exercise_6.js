let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

function allMatches(words, pattern) {
  let matches = [];
  for (let i = 0; i < words.length; i += 1) {
    if (pattern.test(words[i])) {
      matches.push(words[i]);
    }
  }
  return matches;
}

/*
or: 
function allMatches(words, pattern) {
  return words.filter(word) => pattern.test(word);
}

allMatches(words, /lab/);

*/
