const arr = [1,2,3,4]
const initial_val = 0;

// Using Function
// const final_Arr = arr.reduce(function(accumulator, current_val) {
//     console.log(`acc: ${accumulator} and curr_val: ${current_val}`);
//     return accumulator + current_val
// },initial_val)



// using Arrow function

const final_Arr = arr.reduce((acc, curr) => (
console.log(`acc: ${acc} and curr_val: ${curr}`),
acc + curr)) // if we do not pass the initial value then it will take the first element of the value as accumulator(basically last value)

// console.log(final_Arr);


const shoppingCart = [
     {
         itemName: "js course",
         price: 2999
     },
     {
         itemName: "py course",
         price: 999
     },
     {
         itemName: "mobile dev course",
         price: 5999
     },
     {
         itemName: "data science course",
         price: 12999
     },
 ]

 
// here we if we do not pass initial value then it will throw garbage as the array is of multiple objects
const total = shoppingCart.reduce((acc, curr) => (acc + curr.price), 0)
console.log(total);









const my_Arr = [5,6,7,8,9,10]

let initial_value = 10;
const new_Arr = my_Arr.reduce((accumulator, current_val) =>{
     return accumulator+current_val
},initial_value)

console.log(new_Arr);