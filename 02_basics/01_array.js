// Array
// size is resizable
// can store different datatypes value in a single array
// 0-based indexing 
// Arrays create a shallow copy(pass the final reference of the array)

// const myArr = [1,2,3,4,5,6]
// console.log(myArr[0]);
// console.log(myArr.length);

// const arr = new Array(1,2,3,4,5,6);
// console.log(myArr[2]);

// Array methods

// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9);  // add the element in the first position
// console.log(myArr);

// myArr.shift();  // shift to one position ahead in the array that simply means to remove the 1st element
// console.log(myArr);

// console.log(myArr.includes(10)); // return boolean value
// console.log(myArr.indexOf(15)); // if present then index else -1

// const newArray = myArr.join();  // will bind and convert it into the string

// console.log(myArr);
// console.log(newArray);
// console.log(typeof(myArr));  // object
// console.log(typeof(newArray));  // string


// Slice vs Splice

const myArr = [1,2,3,4,5,6]

console.log("A", myArr);

const myn1 = myArr.slice(1,3);  // won't modify the original array
console.log(myn1);                  

console.log("B", myArr);

const myn2 = myArr.splice(1,3); // will modify the original array and return the sliced part and includes the last element also
console.log(myn2);





