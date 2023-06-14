const letterPositions = function(sentence) {

  const results = {};

  let spacelessSentence = sentence.replaceAll(" ", "");

  for (let i = 0; i < spacelessSentence.length; i++) {
    if (results[spacelessSentence[i]]) {
      results[spacelessSentence[i]].push(i);
    } else {
      results[spacelessSentence[i]] = [i];
    }
  }
    
  return results;
};

module.exports = letterPositions;