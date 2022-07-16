Array.prototype.myPop = function () {
  let receivedArray = this;
  const popedArray = [];
  for (let i = 0; i < receivedArray.length - 1; i++) {
    popedArray[i] = receivedArray[i];
  }
  receivedArray = popedArray;
  return receivedArray;
};
