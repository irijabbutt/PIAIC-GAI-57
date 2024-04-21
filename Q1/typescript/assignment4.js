"use strict";
// 1. Hello Variable
// Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting; // Assign "Hello, World!" to this variable and print it.
greeting = "Hello, World!";
console.log("1.\t", greeting);
// 2. Basic Math
// Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1, num2; // Assign integer values and perform arithmetic operations.
num1 = 5;
num2 = 9;
let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * num2;
let quo = Math.floor(num1 / num2); // Use floor function for division to get whole numbers only.
console.log("2.\t", "Num 1= ", num1, "\t Num 2= ", num2, "\n\t Sum: ", sum, "\n\t Difference: ", diff, "\n\t Product: ", product, "\n\t Quotient: ", quo);
// 3. Swapping Values
// Instructions: Swap the values of two variables without using a third variable.
let a = 1;
let b = 2; // Swap these values without using a new variable.
console.log("3.\t", "Original Values: ", "\ta= ", a, "\tb=", b);
a = a + b; // a=3
b = a - b; // b=1
a = a - b; // a=2
console.log("  \t", "Swaped Values: ", "\ta= ", a, "\tb= ", b);
// 4. Type Annotation (TypeScript)
// Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message; // Now try assigning a number to it and see what happens.
message = "This is a string variable!"; //message = 10;   shows error
console.log("4.\t", typeof message, "\t", message);
// 5. Modulus Operator
// Instructions: Use the modulus operator to find the remainder of two numbers.
num1 = 40;
num2 = 2; // Use the modulus operator (%) to find the remainder.
let remainder = num1 % num2;
console.log("5.\t", "Num 1= ", num1, "\tNum 2= ", num2, "\n\t Remainder= ", remainder);
// 6. Increment Challenge
// Instructions: Increment a variable's value by 1 using two different methods.
let counter = 0; // Increment this value by 1 in two different ways.
counter++; // Method 1: Postfix increment
console.log("6.\t", "Counter Value After First Increment: \t", counter);
++counter; // Method 2: Prefix increment
console.log("  \t", "Counter Value After Second Increment: \t", counter);
// 7. Logical Gates
// Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1 = true, b1 = false, c1 = true; // Write expressions using these.
let and = a1 && b1;
let or = a1 || b1;
let not = !a1;
console.log("7.\t", "AND Gate:\t", and, "\n\t OR Gate:\t", or, "\n\t NOT Gate:\t", not);
// 8. Compound Assignment
// Instructions: Show examples of using compound assignment operators.
let num = 10; // Use +=, -=, *=, and /= on this variable.
num += 9;
num -= 3;
num *= 4;
num /= 2;
console.log("8.\t", "Addition:\t", num + 2, "\n\t Subtraction:\t", num - 3, "\n\t Multiplication:\t", num * 3, "\n\t Division:\t", num / 6);
// 9. Even or Odd
// Instructions: Write a program to check if a number is even or odd.
let ans = num1 % 2; // Determine if this is even or odd.
if (ans == 0)
    console.log("9. \t", num1 + " is even.");
else
    console.log("9. \t", num1 + " is odd.");
// 10. Voting Eligibility
// Instructions: Check if a person is eligible to vote.
let age1; // Check if age is 18 or older to determine voting eligibility.
age1 = 12;
if (age1 >= 18)
    console.log("10. \t", "Age: ", age1 + "\tThe person is eligible to vote.");
else
    console.log("10. \t", "Age: ", age1 + "\tThe person is not eligible to vote.");
// 11. Grading System
// Instructions: Assign a grade based on a numerical score.
let score; // Use conditionals to assign and print grades A, B, C, D, or F.
score = 87;
if (score >= 90)
    console.log("11. \t Grade: A");
else if (score >= 80)
    console.log("11. \t Grade: B");
else if (score >= 70)
    console.log("11. \t Grade: C");
else if (score >= 60)
    console.log("11. \t Grade: D");
else
    console.log("11. \t Grade: F");
// 12. Max of Three
// Instructions: Find the maximum of three numbers.
let v, m, z; // Determine the largest among these.
v = 8;
m = 3;
z = 14;
if (v > m && v > z)
    console.log("12. \t The maximum value is " + v + ".");
else if (m > v && m > z)
    console.log("12. \t The maximum value is " + m + ".");
else
    console.log("12. \t The maximum value is " + z + ".");
// 13. Leap Year Checker
// Instructions: Check if a given year is a leap year.
let year; // Determine if this is a leap year.
year = 2024;
year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) //  checks for conditions for leap years
    ? console.log(`13. \t ${year} is a leap year`)
    : console.log(`13. \t ${year} is not a leap year`);
// 14. Fahrenheit to Celsius Converter
// Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit; // Convert this to Celsius and print the result.
fahrenheit = 50;
console.log("14.\t Temperature in Fahrenheit: " +
    fahrenheit +
    "°F" +
    "\n\t Temperature in Celsius: " +
    (((fahrenheit - 32) * 5) / 9).toFixed(2) +
    "°C" // to convert °F into °C fixed number with two decimal places
);
// 15. Positive, Negative, or Zero
// Instructions: Check if a number is positive, negative, or zero.
let number; // Determine the sign of this number.
number = 6;
if (number < 0)
    console.log(`15. \t The number ${number} is negative.`);
else if (number > 0)
    console.log(`15. \t The number ${number} is positive.`);
else if (number == 0)
    console.log(`15. \t The number ${number} is equal to zero.`);
else
    console.log("Error"); //  if none of them are true then prints Error
// 16. Multiplication Table
// Instructions: Write a program that prints the multiplication table of a given number up to 10.
let numb; // Print the multiplication table for this number up to 10.
numb = 7;
console.log("\n16. \t Multiplication Table");
for (let i = 1; i <= 10; i++) {
    console.log(`    \t ${numb} x ${i} = ${numb * i}`); // prints each line of the table
}
