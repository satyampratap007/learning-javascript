
// function sayMyname() {
//     console.log("my function1");
// } 

// // sayMyname();

// function add2no(n1, n2) {
//     return n1 + n2;
// }

// const n1 = 5, n2 = 7;
// console.log(add2no(n1, n2));


function loginusermsg(username = "satyam")
{
    if(username === undefined){
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginusermsg("ram"))


// Calculate price if you have not fixed number of input

function CalculateCartPrice(...num1){ // rest operator
    return num1;
}

console.log(CalculateCartPrice(200,400,500,200,1500)); // will get in the form of array

const user = {
    username: "Satyam",
    price: 199,
    
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

// No need of seperate object creation
handleObject(
    {
        username : "saty",
        price: 50
    }
)

// likewise we can do same for array

const my_arrr = [200,400,600,800]


function returnsecondvlaue(getarray){
    return getarray[1];
}

// console.log(returnsecondvlaue(my_arrr));
console.log(returnsecondvlaue([100,200,300,500]));

