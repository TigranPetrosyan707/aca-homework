Array.prototype.mySlice = function (argOne, argTwo) {
  const slicedArray = [];
  if (argOne >= 0 && argTwo) {
    for (let i = argOne; i < argTwo; i++) {
      slicedArray.push(this[i]);
    }
  } else if (argTwo === undefined && argOne >= 0) {
    for (let i = argOne; i < this.length; i++) {
      slicedArray.push(this[i]);
    }
  } else if (argOne < 0 && argTwo === undefined) {
    for (let i = this.length - 1; i > this.length - 1 - Math.abs(argOne); i--) {
      slicedArray.push(this[i]);
    }
  }
  return slicedArray;
};
