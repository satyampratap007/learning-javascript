//  when obj created with constructor then always form a singleton
// else when created with literals then donot form a singleton

// Object literals


const mySym = Symbol("key1");
const user = {
    name: "Satyam",
    "full name" : "Satyam Pratap",
    [mySym]: "myKey1", // symbol
    age: "22",
    location: "Bihar",
    email: "satyampratap007@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]); 
// console.log(user[mySym]);
// console.log(user.age);

// Modifying object values

// user.age = 88;
// console.log(user.age); // 88
// Object.freeze(user); // here all the value will get freezed and won't propogate further
// user.age = 68;
// console.log(user.age); // 88

// console.log(user);

// Adding function in Object

user.greeting = function(){
    console.log("Hello js user");
}

user.greeting2 = function(){
    console.log(`Hello js user: ${this.name}`);
}

user.greeting3 = function(){
    console.log(`Hello js user "${this.name}" your age is: ${this.age}`);
}

console.log(user.greeting);  // undefined
console.log(user.greeting());
console.log(user.greeting2());
console.log(user.greeting3());





