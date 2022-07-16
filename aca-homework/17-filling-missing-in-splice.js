function missingNumbersFiller(incompleteArray) {
  const missingNumbers = [];
  let startedIndex;
  for (
    let currentIndex = 0;
    currentIndex < incompleteArray.length - 1;
    currentIndex++
  ) {
    if (
      incompleteArray[currentIndex + 1] - incompleteArray[currentIndex] !==
      1
    ) {
      startedIndex = currentIndex + 1;
      while (
        incompleteArray[currentIndex + 1] - incompleteArray[currentIndex] !==
        1
      ) {
        missingNumbers.push(incompleteArray[currentIndex] + 1);
        incompleteArray[currentIndex]++;
      }
    }
  }
  incompleteArray.splice(startedIndex, 0, ...missingNumbers);
  incompleteArray[startedIndex - 1] = missingNumbers[0] - 1;
  return incompleteArray;
}
