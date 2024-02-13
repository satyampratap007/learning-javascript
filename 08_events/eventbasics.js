// document.getElementById("owl").onclick = () => {
//     alert('this is a functional owl');
// }


// document.querySelector("#owl").addEventListener('click', () => {
//     alert('owl clicked using event listener');
// }, false); // here false is optional as a third parameter


// using attach Event() => past 
// jquery d- on


// Event Object

// document.querySelector("#owl").addEventListener('click', (e) => {
//     console.log(e);
// }, false);

// Type
// Timestamp
// defaultPrevented
// target
// toElement
// srcElement
// currentTarget
// ClientX, ClientY, screenX, ScreenY 
// altkey, keyCode, shiftkey, ctrlkey

// Event propagation -> Two Context
// 1) Event Bubbling
// 2) Event Capturing

// document.querySelector('#images').addEventListener('click', (e) => {
//     console.log("Clicked inside the ul")
// }, false)

// document.querySelector('#owl').addEventListener('click', (e) => {
//     console.log("Owl Clicked");
// }, false)

// to stop the default behaviour of anchor tag

document.querySelector('#google').addEventListener('click', (e) => {
    console.log("Google Clicked");
    e.preventDefault();
    // e.stopPropagation(); // to stop the further propogation
},false)


/***************** Exercise ******************/

// When we click on any images then it should fade out

document.querySelector('#images').addEventListener('click', (e) => {
    // console.log(e.target.parentNode);
    // console.log(remove_child);
    // remove_child.remove();
    // OR
    const t = e.target; // target element
    if(t.tagName === 'IMG'){
        let rem = t.parentNode;
        rem.parentNode.removeChild(rem);
    }
}, false)




// High priority queue is also known as Microtask Queue



