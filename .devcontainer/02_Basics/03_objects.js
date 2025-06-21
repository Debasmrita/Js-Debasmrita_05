// singleton

//object literals

// Object.create
const mySym= Symbol("key1")


const js_user  = {
    name: "Debu",
    age: 20,
    [mySym]: "myKey1",
     "location": "Kolkata",
    email: "debu@gmail.com",
    isLoggesIn: false,
    lastLoggesdIn: ["monday","Saturday"]
}
console.log(js_user.email);
console.log(js_user["email"]);
console.log(js_user["location"]);
console.log( js_user[mySym]);

js_user.email ="DebuDidi@gmail.com";
//Object.freeze(js_user)
console.log(js_user)
js_user.email="hello@gmail.com"


js_user.greeting = function(){
    console.log("Hello!!")
}

js_user.greeting2 = function(){
    console.log(`Hello!! js user, ${this.name} `)
}

console.log(js_user.greeting2())