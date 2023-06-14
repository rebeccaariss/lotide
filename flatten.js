const flatten = function(arr) {
  const updated = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        updated.push(element[i]);
      }
    } else {
      updated.push(arr[element]);
    }
  }
  return updated;
};

module.exports = flatten;