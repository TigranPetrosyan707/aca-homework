function getMaxElement(arr) {
  let sortedArray = arr.sort((max, min) => max - min);
  return sortedArray[sortedArray.length - 1];
}

getMaxElement([1, 9, 8, 4, 88, 56, 79, 26, 47]);
