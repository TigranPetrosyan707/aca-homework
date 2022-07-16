Array.prototype.myConcat = function (...arrays) {
  let initialArray = this;
  for (let index = 0; index < arrays.length; index++) {
    initialArray.push(arrays[index]);
  }
  return initialArray;
};
