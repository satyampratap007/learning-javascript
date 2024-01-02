// const tinderUser = new Object() // single ton
const tinderUser = {} // non singleton

tinderUser.id = "123abc"
tinderUser.name = "saty"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const RegularUser = {
    email: "saty@gmail.com",
    fullname: {
        Userfullname:{
            firstName: "Satyam",
            lastName: "Pratap"
        }
    }
}

// console.log(RegularUser.fullname.Userfullname.firstName);

const obj1 = {
    1: "a", 2: "b"
}
const obj2 = {
    3: "c", 4: "d"
}
const obj3 = {
    5: "e", 6: "f"
}

// const obj3 = {obj1, obj2}; // problemetic

// const obj3 = Object.assign({},obj1, obj2);

// console.log(obj3);

// const op = {...obj1, ...obj2, ... obj3};

// console.log(op);

// Array of object

const users = [
    {
        id: 1,
        email: "satyampratap007"
    },
    {
        id: 2,
        email: "satyampratap007"
    },
    {
        id: 3,
        email: "satyampratap007"
    }
]


console.log(users[2].email);
console.log(typeof(users)); // object

console.log(tinderUser);

// get all the keys from the obect in the  form of array
console.log(Object.keys(tinderUser));

console.log(Object.entries(tinderUser));  // convert each property to array (i.e. arr of key and value)

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


