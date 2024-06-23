// 16. More Guests: You just found a bigger dinner table, so now more space is
//     available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
import { newguestList, print } from "./q15";
let guestList = [...newguestList]; // copy the array from q15
console.log("Original Guest List: ", guestList);
console.log(guestList); // print the original guest list
// Add a print statement to the end of your program informing people that you found a bigger dinner table
console.log("I found a bigger dinner table, so I can invite more guests!");
// Add one new guest to the beginning of your array
guestList.unshift("Rana");
console.log("Updated Guest List after adding Rana: ", guestList);
// Add one new guest to the middle of your array
guestList.splice(3, 0, "Mahmood");
console.log("Updated Guest List after adding Mahmood: ", guestList);
// Use append() to add one new guest to the end of your list
guestList.push("Shebi");
console.log("Updated Guest List after adding Shebi: ", guestList);
// Print a new set of invitation messages, one for each person in your list
console.log(guestList); // print the updated guest list

export{guestList}