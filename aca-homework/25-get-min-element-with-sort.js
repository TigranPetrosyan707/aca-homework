function getMinElement(arr) {
  let sortedArray = arr.sort((max, min) => max - min);
  return sortedArray[0];
}

getMinElement([347, 9, 8, 4, 88, 56, 79, 26, 47]);
