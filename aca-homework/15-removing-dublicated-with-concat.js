function removeDuplicatedItems(arrayOne, arrayTwo) {
  const concatedArray = arrayOne.concat(arrayTwo);
  const uniqueItems = [];
  for (let firstIndex = 0; firstIndex < concatedArray.length; firstIndex++) {
    let switcher = true;

    for (
      let secondIndex = firstIndex + 1;
      secondIndex < concatedArray.length;
      secondIndex++
    ) {
      if (concatedArray[firstIndex] === concatedArray[secondIndex]) {
        switcher = false;
        break;
      }
    }
    if (switcher) {
      uniqueItems.push(concatedArray[firstIndex]);
    }
  }
  return uniqueItems;
}
