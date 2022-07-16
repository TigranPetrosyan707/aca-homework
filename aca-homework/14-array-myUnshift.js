Array.prototype.myUnshift = function (...values) {
  let currentArray = this;
  let currentArrayIndex = currentArray.length - 1;
  while (currentArrayIndex >= 0) {
    currentArray[currentArrayIndex + 1] = currentArray[currentArrayIndex];
    currentArrayIndex--;
  }
  currentArray[0] = values;
  return currentArray;
};
