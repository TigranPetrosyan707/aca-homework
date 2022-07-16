function getEvenDigits(num) {
  let evenDigitsArray = [];
  while (num > 0) {
    let currentDigit = num % 10;
    if (currentDigit % 2 === 1) {
      evenDigitsArray.push(currentDigit);
    }
    num = (num - currentDigit) / 10;
  }
  return evenDigitsArray;
}
