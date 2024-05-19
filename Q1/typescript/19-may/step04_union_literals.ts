// single pipe sign | use for defining multiple data types and values for variable 
let myname: string | null | number
myname = "Rijab"
console.log(typeof(myname));
myname = null
console.log(typeof(myname));
myname = 22
console.log(typeof(myname));

let age: 22 | "david" | 4.56
// age = "Rijab" //error in value
// age = null   //error in value
age = 22