//Global Scope

//var c=30;
let a =200

//Block scope
if(true){
    let a =10;
    const b=20;
    var c=300;
    console.log("Inner:",a);
    
}
console.log(a);
//console.log(b);
//this two are not accessible because they are out of their scope. they can only be accessible within if block.
//console.log(c);


function one(){
    const username= "Debu"

    function two(){
        const website= "GitHub"
        console.log(username);// accessibile!
        
    }
    //console.log(website);// !!! Error !!! as we are trying to access it out of the scope 
    two();
    
}
one();

// in nested function, the CHILD can ACCESS its PARENT func. variables, as it works as a golabl variable to its child. but the reverse is not possible.

if(true){
    const username="debu"
    if(username=== "debu"){
        const website= " youtube"
        // console.log(username + website);
        
    }
    //console.log(website);//not within scope
    
}
//console.log(username);// not within scope

// ----------------------- INTERSTING --------------------

console.log(addone(5));
function addone(num){
   return num+1
}
// now, the above function will execute, no matter where are we calling the func. as we are not holding the function within any variable


console.log(addtwo(4));
const addtwo = function(num2){
    return num2+2;
}
//this will give an error, as we are holding the function within a variable
 