// 19- Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function elementExists(array: any[], element: any): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}
console.log(elementExists(["Rijab", "age", "is", 22, "a", "b", "c", "d", 6], "v"));