// console.log("Conditional Expression")

// let a = prompt("Hey what's ur age?")  // will ask you
// // Here Type of a will always be string
//  console.log(typeof a);  // string
 
//  let b = alert("Hey what's ur age?") // will tell you 
//  a = "Satyam"
//  a = Number.parseInt(a); // converting the string to number
//  console.log(typeof a);  // Number


// let a = prompt("What's ur age?");
// a = Number.parseInt(a)
// if(a < 50){
//     alert("This is a valid age.");
// }
// else{
//     alert("this is an invalid age");
// }

// Ternary Operators:
// (cond) ? (true) : (false )
// Switch statement
const expr = "Papaya";
switch(expr){
    case "orange":
        console.log("Oranges are $(50) pound.");
        break;
    case "Papaya":
        console.log("Papaya are $ 50.")
        break;
    case "Mangoes":
        console.log("Mangoes are 40 pound.")
        break;
    default:
        console.log(`Sorry we are out of ${expr}`);
}

