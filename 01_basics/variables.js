// Ryan Dahl - > Node.js
console.log("Hello World!")
// Variables
// A container to store any value of any data types could be int, char, string etc.
// JS is Dynamically typed language - > change at run time
// Statically typed  - c/ c++

// let a = 67;
// console.log(a);
// a = "Harry";
// console.log(a);
//  We can't use reserved keyword as variable name
// JS is case sensetive


/* Difference b/w const,let, var

var is used for variables (Not scoped)
avoid to use var

const - Constant (we can't change the value after declaring it)

let and const- Block Scoped Variables

*/

let a = 45;
// var a = 50;  // won't throw error 
const author = "Satyam";
// let author = 5; // will throw error as we can't change const var once declared

let b = null;
let c = undefined;

{
    let a = "checking let";
    console.log(a);
}
console.log(a);