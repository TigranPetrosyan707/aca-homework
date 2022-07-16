Array.prototype.myShift = function () {
  let currentArray = this;
  const newArray = [];
  let newArrayIndex = 0;
  for (let i = 1; i < currentArray.length; i++) {
    newArray[newArrayIndex] = currentArray[i];
    newArrayIndex++;
  }
  currentArray = newArray;
  return currentArray;
};
