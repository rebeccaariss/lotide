const tail = function(arr) {
  let headless = arr.slice();
  headless.shift();
  return headless;
};

module.exports = tail;