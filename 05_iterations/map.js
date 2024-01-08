// Map

// Adding 10 to each value of an array

const nums = [1,2,3,4,5,6,7,8,9,10]

// const new_nums = nums.map((num) => (num + 10))

// Using for each 
const new_nums = []
nums.forEach((ele) => {
    new_nums.push(ele + 10);
})

// console.log(new_nums);



// Chaining

const  new_val = nums
                .map((num) => (num * 10))
                .map( (n) => (n +1))
                .filter((num) => num >= 40)  // boolean
console.log(new_val);