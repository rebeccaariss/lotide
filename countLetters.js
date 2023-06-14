const countLetters = function(sentence) {
  //regex expression learned from https://futurestud.io/tutorials/remove-extra-spaces-from-a-string-in-javascript-or-node-js :
  let spacelessSentence = sentence.replace(/\s+/g, ' ').trim();
  const results = {};

  // for...of does not include spaces in the count:
  // NOTE: did need regex above despite this note about for...of from Compass. The two things seem to be needed in combination. Revisit at refactor.
  for (const letter of spacelessSentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

// Note: Not part of the assignment, but for later refactoring: exclude symbols like "% or "$" from the count

module.exports = countLetters;