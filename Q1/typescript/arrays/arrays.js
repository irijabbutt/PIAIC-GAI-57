"use strict";
// non-premitive datatype
const fruits = ["apple", "banana", "orange"];
console.log(fruits);
//push (used to add value dynamically at the end) , original array also manipulate
console.log("array length", fruits.length);
const arrl = fruits.push("grapes"); //push appends new element and returns new length of array
console.log("after push");
console.log(fruits);
console.log(arrl);
// pop (used to remove value dynamically from the end and return it) , original array also manipulate
console.log(fruits.pop());
console.log("after pop");
console.log(fruits);
// unshift (inserts new element at the start)
fruits.unshift("mango"); //returns new length of array
console.log("after unshift");
console.log(fruits);
// shift (remove value from the start)
fruits.shift();
console.log("after shift");
console.log(fruits);
console.log(fruits.slice(1, 3)); //divides array, returns 1,2 index values in array, returns copy of section
console.log("after slice");
console.log(fruits);
console.log("after splice 1,1:");
console.log(fruits.splice(1, 1)); //used to delete number of values and return deleted values, original array also manipulate
fruits.splice(1, 0, "mango", "strawberry"); //0 element delete at index 1, add new elements to index 1
console.log("after splice 1,0,mango,strawberry:");
console.log(fruits);
const juices = [1, 2, 5, 14, 7, 2];
let gig = [3, 9, 2, 1, 8, 7];
let temp = juices.concat(gig);
console.log(temp);
