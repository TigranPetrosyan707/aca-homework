function convertStrIntoArr(arr) {
  return Array.from(arr, (x) => x.split("")).flat();
}
