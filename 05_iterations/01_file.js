// for 

// const array = ["ram", "shyam", "Gita"]


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// Break and Continue
// berak the loop if we detect 6
for (let i = 1; i <= 20; i++) {
    if(i == 6){
        console.log(`Detected 6 `);
        break;
    }
    console.log(`Value of i is: ${i}`)
}
// skip the element if we detect 6
for (let i = 1; i <= 20; i++) {
    if(i == 6){
        console.log(`Detected 6 `);
        continue;
    }
    console.log(`Value of i is: ${i}`)
}



