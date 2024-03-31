"use strict";
// ---Conditional Statements---
// --@ IF Else
let cond = "Pakistan";
let ages = 22;
if (cond == "Pakistan") {
    console.log("pakistani");
}
else {
    console.log("not pakistani");
}
// if/else if
if (ages <= 12 && ages < 13) {
    console.log("child");
}
else if (ages >= 13 || ages <= 19) {
    console.log("teenage");
}
else {
    console.log("Adult");
}
// odd and even
let result = ages % 2;
if (result == 0) {
    console.log("Even");
}
else {
    console.log("odd");
}
