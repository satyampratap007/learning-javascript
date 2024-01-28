const clock = document.querySelector("#Clock")

// let date = new Date();
// console.log(date.toLocaleTimeString()); // time will get updated once refreshed

// Syntax
// setInterval(function(){}, time);

    setInterval(()=>{
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000);
