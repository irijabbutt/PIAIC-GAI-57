// 34- Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function reverse_Array(arr: any[]): any[] {
  let newArr: any[] = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverse_Array([1, 2, 3, 4, 5]));