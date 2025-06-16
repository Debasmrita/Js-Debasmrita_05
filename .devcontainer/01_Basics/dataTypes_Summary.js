// Primitive (call by value)
//7 types: String, Number, null, boolean, undefined, Symbol, BigInt.

// javaScript a dynamically typed language...

//One of the primary reasons JavaScript is dynamic is because it is dynamically typed. This means that variable types are determined at runtime rather than at compile time. In JavaScript, you do not need to declare the type of a variable when you create it. Instead, the type is associated with the value assigned to the variable and can change as the program runs. For example:
let x = 42;
console.log(x); // Output: 42
x = "hello";
console.log(x); // Output: hello



const score= 100;
const scoreNumber= 100.3;
const isLoggedIn= false;
const outsideTemp= null;
let value; // undefined.


const id = Symbol('123');
const anotherId= Symbol('123')

console.log(id== anotherId);// false

const bigNumber= 10092834468749n;


// Reference type or Non-primitive Data Types
// Arrays, Objects, Functions.

const heros = ["batman", "captain America", "Iron Man"];

let myObj={
    name: "Debasmrita",
    age: 20
}


const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof myFunction);// function
