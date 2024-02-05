
// Bubble Up
// document.querySelector("#grandParents")
// .addEventListener('click' , ()=>{
//     console.log("Grandparent Clicked");
// }, false) // by default it is false
// document.querySelector("#parents")
// .addEventListener('click' , ()=>{
//     console.log("Parent Clicked");
// },false)
// document.querySelector("#child")
// .addEventListener('click' , ()=>{
//     console.log("Child Clicked");
// },false)

// Trickle Down 


// document.querySelector("#grandParents")
// .addEventListener('click' , ()=>{
//     console.log("Grandparent Clicked");
// }, true) // by default it is false
// document.querySelector("#parents")
// .addEventListener('click' , ()=>{
//     console.log("Parent Clicked");
// },true)
// document.querySelector("#child")
// .addEventListener('click' , ()=>{
//     console.log("Child Clicked");
// },true)




// document.querySelector("#grandParents")
// .addEventListener('click' , ()=>{
//     console.log("Grandparent Clicked");
// }, true) // capturing
// document.querySelector("#parents")
// .addEventListener('click' , ()=>{
//     console.log("Parent Clicked");
// },false) // bubbling
// document.querySelector("#child")
// .addEventListener('click' , ()=>{
//     console.log("Child Clicked");
// },false) // bubbling 


// How can we stop propogation


document.querySelector("#grandParents")
.addEventListener('click' , ()=>{
    console.log("Grandparent Clicked");
}, true) 
document.querySelector("#parents")
.addEventListener('click' , (e)=>{
    console.log("Parent Clicked");
    // e.stopPropagation();
},true) 
document.querySelector("#child")
.addEventListener('click' , (event)=>{
    console.log("Child Clicked");
    event.stopPropagation();
    
},true)  

// Link to learn more about Event Loop

https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif