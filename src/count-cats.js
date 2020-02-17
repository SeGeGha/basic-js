module.exports = function countCats(backyard) {
  return backyard.reduce( (count, nextValue) => {
    return count += nextValue.filter( s => s == '^^').length       
  }, 0);
};
