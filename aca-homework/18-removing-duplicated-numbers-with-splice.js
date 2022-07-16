function duplicatedNumbersRemover(arr) {
  for (let firstIndex = 0; firstIndex < arr.length; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < arr.length;
      secondIndex++
    ) {
      if (arr[firstIndex] === arr[secondIndex]) {
        arr.splice(firstIndex, 1);
      }
    }
  }
  return arr;
}
