const without = function(source, itemsToRemove) {
  const updated = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      updated.push(item);
    }
  }
  return updated;
};

module.exports = without;