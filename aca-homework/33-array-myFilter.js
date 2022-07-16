Array.prototype.myFilter = function (callBack) {
  let filteredArray = [];
  for (let index = 0; index < this.length; index++) {
    if (callBack(this[index])) {
      filteredArray.push(this[index]);
    }
  }
  return filteredArray;
};

[1, 5, 7, 9, 6, 8, 12, 45, 78].myFilter(function (item) {
  return item % 2 === 0;
});
