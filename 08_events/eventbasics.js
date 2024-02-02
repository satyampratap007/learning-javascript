// document.getElementById("owl").onclick = () => {
//     alert('this is a functional owl');
// }


// document.querySelector("#owl").addEventListener('click', () => {
//     alert('owl clicked using event listener');
// }, false); // here false is optional as a third parameter


// using attach Event() => past 
// jquery d- on


// Event Object

document.querySelector("#owl").addEventListener('click', (e) => {
    console.log(e);
}, false);

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







