// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//     to produce an index error. Make sure you correct the error before closing the program.

let fruits: string[] = ["apple", "banana", "cherry", "date"]
console.log(fruits[3]);
if (fruits.length < 10) {  //if >10 throws errors
    console.log(fruits);
} else {
    console.log("Index out of range");
}
