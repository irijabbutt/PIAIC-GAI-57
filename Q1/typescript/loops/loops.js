"use strict";
// loops are used to iterate over a block of code
// for loop    // first checks the condition then execute it
// while loop   // first checks the condition then execute it
// do while loop    // first execute 1 time then checks the condition
for (let i = 1; i <= 7; i += 2) //increment by 2
 {
    console.log("Hello World ", i);
}
const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log("\nArray prints using for loop:\n");
for (let i = 0; i < array1.length; i++) {
    console.log("\t", array1[i]);
}
function printTable(input) {
    console.log(`\n\tTable of ${input} is:\n`);
    for (let x = 1; x <= 10; x++) {
        console.log(`\t${input} * ${x} = ${input * x}`);
    }
}
printTable(7);
console.log(array1.indexOf("m"));
console.log("\n\tArray prints using for of loop:\n");
