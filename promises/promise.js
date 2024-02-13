// fetch('https://somthjing.com').then().catch().finally() Promises do not work in this way
// Before promise there were lib like bluebird and q which provide the functionality of .then, .catch, fetch etc.
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// // Async donot handle catch gracefully
// const consumePromiseFive = async() => {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive();

// const getAllUsers = async() => {
//     try{
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// getAllUsers();

const promiseOne = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("promiseOne completed");
        resolve();
    },1000)
})

promiseOne.then(() => {
    console.log("Promise One resolved");
})

// Or

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Prom 1 wut declr");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Prom 1 resolved");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Prom 2 completed");
        resolve({username: "Satyam", pass: "s123"})        
    }, 1000);
}).then((user) => {
    console.log(user);
    console.log("Prom2 is resolved");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false 
        if (!error) {
            resolve({username: "pratap", pass: "12345"});
        }
        else{
            reject("Error: Not completed successfully")
        }        
    }, 1000);
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error);
})

const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true;
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });

const consumePromiseFive = async() => {
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }        
}
consumePromiseFive();

// const getAllUsers = async() => {
//     try{
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// getAllUsers();





