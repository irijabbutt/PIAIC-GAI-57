"use strict";
//--- Operators ---
// --*Arithmetic operations
//Addition
let x = 2;
let y = 5;
let add = x + y; // 7
//Concatination concept
let add1 = "x" + "y"; // xy
let add2 = "x" + "y" + x + y; // xy25
let add3 = x + y + "xy"; //7xy
console.log("add: ", add);
console.log("add1: ", add1);
console.log("add2: ", add2);
console.log("add3: ", add3);
//Subtraction op
//let sub = "x" - y  //error
//let sub = 'x' - 'y'  //error
let sub = x - y; //-3
console.log("sub1:", sub);
//Multiplication op
//let mul=x*"y"   //error
let mul = x * y;
console.log("mul:", mul);
// Division op
//let div=x/"y" //error
let div = x / y;
console.log("div:", div);
// Exponential op
// let exp = x ** "y" //error
let exp = x ** y;
console.log("exp:", exp);
// --*Assignment op (=)
let n = 5;
n += 5; //n=n+5 ==>10
console.log("assignment op:", n);
// --*Increment (++) /Decrement (--) op
n++; // n=11   (value change and update new value in n)
console.log("Increment:", n);
n + 2; // value change but not updated in n
console.log("Increment:", n + 2);
n--; // n=10
console.log("Decrement:", n);
// --*Comparison op
n = 10;
// ==
n == 10; //true   (compare values only of same data types)
console.log(n);
// ===
n === 3; //false (data type and value compare use specially for dynamically data)
// not equal(!=)
n != 5; //true
//greater than(>)
n > 5; //true
// lesser than(<)
n < 5; //false
// greator than or equal(>=)
n >= 15; //false
// less than or equal(<=)
n <= 15; //true
// Logical op
n = 7;
// OR(||)
// T || T = T
// T || F = T
// F || T = T
// F || F = F
console.log(n == 7 || n == 9); //true (OR(||) compares first value if true than doesn't check second value)
console.log(n == 10 || n < 9); //true 7<9
console.log(n == 10 || n == 8); //false
// AND(&&)
// T || T = T
// T || F = F
// F || T = F
// F || F = F
console.log(n == 7 && n <= 9); //true
console.log(n >= 9 && n == 7); //False   (AND(&&) compares both values than shows the result)
// NOT(!)
// T = F
// F = T
console.log(!(n == 7 && n <= 9)); //False (NOT(!) convert values)
