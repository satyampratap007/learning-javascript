/* This Keyword */

// this keyword refers to current context
// In browser global object is "window" 

// const user = {
//     username: "Satyam",
//     price : 9999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }


// user.welcomeMessage()
// user.username = "Saty"
// user.welcomeMessage()

/*************** IMPORTANT ************** */

// console.log(this); // here it will refer to empty object as we are in node environment and there is no context in global

// while in browser it will refer to window Object


/* *********************ARROW FUNCTION ********************* */
// function my_fun() {
//     let user = "Satyam"
//     // console.log(this.user); // this keyword doesnot work inside function
//     console.log(this);
// }

// my_fun();

// const mynewfun = function my_fun() {
//     let user = "Satyam"
//     console.log(this.user); // this keyword doesnot work inside function
// }


// const chai = () => {
//     let username = "ram"
//     // console.log(this.username); // username
//     console.log(this);
// }

// chai();



// Pure arrow function (Explicit Return)
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit Return
const addTwo = (num1, num2) => num1 + num2;

// OR

const multiplyTwo = (n1,n2) => (n1*n2)
console.log(addTwo(4,5));
console.log(multiplyTwo(4,5));

// why it is advised to wrap inside parenthesis
// if I am supposed to return object 

const user = (username, place) => ({
    Username: username,
    place: place
});


// console.log(user("Satyam", "Mfp"))



// my_Arr.forEach(function(){})

// or

// Loop over array to find the square of each element of the array

const my_Arr = [2,35,5,8,9]
my_Arr.forEach((i) => console.log(i*i));

