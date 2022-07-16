function isPalindrome(str) {
  let finalResult = "";
  let convertToArr = str.split("");
  while (convertToArr.length > 0) {
    finalResult += convertToArr.pop();
  }
  return finalResult === str;
}
