const heros = ["Thor", "Ironman", "Spiderman"]
const name = ["satyam", "shubh","lalit","ram"]

// Not a good practice
// heros.push(name); // create array inside an array 
// console.log(heros);

// const new_array =  heros.concat(name);  // will give the new array
// console.log(new_array);

// best practice

// Spread operator 
// const all_new_arr = [...heros, ...name]; // we can combine any no. of array togther
// console.log(all_new_arr);

// const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// // const real_another_array = another_Array.flat(Infinity);
// const real_another_array = another_Array.flat(2);
// console.log(real_another_array);


// Problems? when we scrap data from other src then the data might be in nodelist, stream, string
// and suppose we want in array

// soln->

// First Ask
console.log(Array.isArray("Hitesh"));   // as it is not array so it will return false
const temp = "Hitesh"; // this is of type string
console.log(typeof(temp)); // desc the type of temp which is string
console.log(Array.from("Hitesh")); // here hitesh will be printed in the form of Array 
/*****************************************/
// console.log(Array.from({name: "HItesh"}));  // empty Array
// Could not be able to create array as we donot mention whether I have to make array of key or value

// let arr = Array.from(Object.entries({name: "Satyam", n2 : "Ram", n3 : "Shyam"}),([key,value]) =>value);
let obj = {name: "Satyam", n2 : "Ram", n3 : "Shyam"}
// let arr = Array.from(Object.entries(obj),([key,value]) =>value); // here we can convert and will get the op as we've mentioned what to convert into array
let arr = Object.values(obj);
console.log(arr);
console.log(arr[2]);
console.log(typeof(arr));



const o1 = {k : "ram", k : "S"}







let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

const a1 = [1,2,3,4];
const a2 = [1,3,4];
const a3 = [5,8];

const new_Arr = [...a1, ...a2, ...a3];

console.log(new_Arr);