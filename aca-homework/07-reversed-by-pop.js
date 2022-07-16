function toReversed(arr) {
  let reversedArray = [];
  let currentIndex = 0;
  while (arr.length > 0) {
    reversedArray[currentIndex] = arr.pop();
    currentIndex++;
  }
  return reversedArray;
}
