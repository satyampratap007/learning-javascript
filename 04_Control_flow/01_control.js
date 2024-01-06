// if

// <, >, <=, >=, == , === , !=, !==

if(2 === "2"){
    console.log("true");
}
else if(2 == "2"){
    console.log("Not strictly equal");
}
else{
    console.log("false");
}

// falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN


// Truthy CSSMathValue

// "0" , "false", " ", [], {}, function() {}

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }

if(false == 0) {
    console.log("true");
}

if(false == '') {
    console.log("true");
}

if('' == 0) {
    console.log("true");
}

// logical AND(&&) OR (||)

// (??) - Nullish Coalescing Operator : null or undefined



let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10//  here in the place we bascially apply complex function from where we can fetch value

// val1 = undefined ?? 15  // 15 
val1 = null ?? undefined ?? 11 ?? 15 // 11 // first true values

console.log(val1);
console.log(val1);

// Ternary Operator 
// condition ? true : false