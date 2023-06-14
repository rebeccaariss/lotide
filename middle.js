const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[Math.floor((arr.length - 1) / 2)]];
  } else {
    return [arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor(arr.length / 2)]];
  }
};

module.exports = middle;