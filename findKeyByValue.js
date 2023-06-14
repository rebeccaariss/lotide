const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
    for (const title of obj[key]) {
      if (title === val) {
        return key;
      }
    }
  }
};

module.exports = findKeyByValue;