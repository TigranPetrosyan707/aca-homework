Array.prototype.myIncludes = function (arg) {
  for (let index = 0; index < this.length; index++) {
    if (this[index] === arg) {
      return true;
    }
  }
  return false;
};
