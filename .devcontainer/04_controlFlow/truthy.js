const userEmail =[]

if (userEmail) {
    console.log("GOT user email");
} else {
    console.log("dont have user emaIL");
}

//falsy values---
// false, 0, -0, BigInt on, "", null, undefined, NaN

//truthy values---
// "0", 'false', " ", [], {}, function(){}, 


if (userEmail.length === 0) {
    console.log("Array is empty");
    
}

const empty={}
if(object.keys(empty).length === 0){
    console.log("Empty")
}


// nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1)