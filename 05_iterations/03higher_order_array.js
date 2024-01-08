/********************** for of **********************/

// FOR OF: 
//    Map :  ✔
//    Array: ✔
//    Object: ✘


// ["","","","","",""] // array of strings
 
// [{},{},{},{},{},{}]  // array of object


const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greetings =  "Hello World!"
for (const i of greetings) {
    // console.log(`Each char is ${i}`);    
}

const obj1 = [{1: "ram"}, {2: "shyam"}, {3: "Geeta"}]
for (const i of obj1) {
    // console.log(i);
}

/*************** Maps **************/  

const map = new Map();

map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('FR', "France ") 
map.set('IN', "India") // Only unique value will be stored and will get updated by the latest value of that key

// console.log(map);

for (const [key,value] of map) { // here we destructure the map
    // console.log(key, "   ",value);
}





/************************ For in ***********************/

// FOR in: 
//    Map :  ✘
//    Object: ✔
//    Array: ✔



// Object
const user = {
    name: "Satyam",
    age: "22",
    location: "Bihar",
    email: "satyampratap007@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]
}


// for (const key in user){
//     // console.log(key);  // key
//     console.log(user[key]); // value 
// }

const heros = ["Thor", "Ironman", "Spiderman"]
for (const key in heros) {
    // console.log(key);
    // console.log(heros[key]);
}

// For each

forEach(callbackFn)
forEach(callbackFn, thisArg)





const coding = ["js", "ruby", "java", "python", "cpp"]




// coding.forEach(function (item){
//     console.log(item);
// })

// OR 

// coding.forEach((val) =>
//     (console.log(val))
// )

// OR

// function Printme(item){
//     console.log(item);
// }

// coding.forEach(Printme);  // here we need to pass by reference
 
// coding.forEach( (item, index , arr) => {
//     console.log(item, index, arr);
// } )

const my_coding = [
    {
        lang_name: "javascript",
        lang_file_name: "js"
    },
    {
        lang_name: "c++",
        lang_file_name: "cpp"
    },
    {
        lang_name: "python",
        lang_file_name: "py"
    },
    {
        lang_name: "rust",
        lang_file_name: "rs"
    },
]

// my_coding.forEach( (item) => {
//     console.log(item.lang_name);
// })

// foreach do not return any values
const my_val = my_coding.forEach( (item) => {
    // console.log(item);
    return item; // this does not make any sense
})

// console.log(my_val); // undefined


