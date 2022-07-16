function removeDuplicatedNumbers(arr) {
  return Array.from(new Set(arr));
}

removeDuplicatedNumbers([1, 1, 1, 2, 5, 6, 9, 2]);
