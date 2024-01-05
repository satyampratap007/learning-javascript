let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("Inner: ",a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username = "satyam"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two();
}

one();


// Closure yet to study


if(true){
    const username = "satyam"
    if(username === "satyam"){
        const website = " Youtube"
        // console.log(username + website);
    } 
    // console.log(website); // reference error
}
// console.log(website);  // reference error
// console.log(username);  //  reference error



/************** INTERESTING **************/


console.log(addone(5));

function addone(value) {
    return value + 1;
}

// Hoisting

console.log(addtwo(5));

const addtwo = function(num) {      // here addtwo is expression
    return  num + 2;
}




