/* This Keyword */

// this keyword refers to current context
// In browser global object is "window" 

const user = {
    username: "Satyam",
    price : 9999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}


user.welcomeMessage()
user.username = "Saty"
user.welcomeMessage()

/*************** IMPORTANT ************** */

console.log(this); // here it will refer to empty object as we are in node environment and there is no context in global

// while in browser it will refer to window Object






