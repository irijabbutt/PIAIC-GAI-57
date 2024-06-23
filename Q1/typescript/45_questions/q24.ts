// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let name = "Ali";
let age = 25;
let isAdmin = true;
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

let result1 = name === "Ali";
console.log(result1);
let result2 = age !== 30;
console.log(result2);
let result3 = isAdmin === true;
console.log(result3); 
// lower case function
let result4 = name.toLowerCase() === "ali";
console.log(result4); 
// numerical tests
let result5 = age === 25;
console.log(result5); 
let result6 = age !== 30;
console.log(result6); 
let result7 = age > 20;
console.log(result7); 
let result8 = age < 30;
console.log(result8); 
let result9 = age >= 25;
console.log(result9); 
let result10 = age <= 25;
console.log(result10); 
// and operator
let result11 = age > 20 && isAdmin === true;
console.log(result11); 
// or operator
let result12 = age > 20 || isAdmin === true;
console.log(result12);  
// test whether an item is in a array
let result13 = colors.includes("red");
console.log(result13); 
let result14 = colors.includes("yellow");
console.log(result14); 
// test whether an item is not in a array
let result15 = !colors.includes("green");
console.log(result15); 
// test whether an item is not in a array using findIndex
let result16 = colors.findIndex((color) => color === "blue") === -1;
console.log(result16); 
