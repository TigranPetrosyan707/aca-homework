Array.prototype.myJoin = function (symbol) {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (i !== this.length - 1) {
      result += this[i] + symbol;
    } else {
      result += this[i];
    }
  }
  return result;
};
