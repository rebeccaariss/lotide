const flatten = function(arr) {
  const updated = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const nestedItem of element) {
        updated.push(nestedItem);
      }
    } else {
      updated.push(element);
    }
  }
  return updated;
};

module.exports = flatten;