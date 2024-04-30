// 16- Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.

function falseRemover(arr: any = []) {
  return arr.filter(Boolean)
}
 let arr2:any=["2","","3",false,6,3,0,undefined,"rijab",null,22,NaN]
console.log(falseRemover(arr2));