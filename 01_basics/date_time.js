let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


// console.log(typeof(myDate));  // object

// let my_custom_date = new Date(2023,11,23) // here month start from 0 in js
// console.log(my_custom_date.toDateString());

// let my_custom_date = new Date(2023,11,23,5,3) 
// console.log(my_custom_date.toLocaleString());
// let my_custom_date = new Date(2023,5,24,25);
// console.log(my_custom_date.toLocaleString());

// let my_custom_date = new Date("2023-01-14");
// let my_custom_date = new Date("12-18-2023"); // mostly used
// console.log(my_custom_date.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);   // will get the value in milli sec
// console.log(my_custom_date.getTime());

// Conversion of milliseconds to seconds

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());

console.log(`Day is ${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleDateString('default', {
    weekday: "long"
})
console.log(newDate);
