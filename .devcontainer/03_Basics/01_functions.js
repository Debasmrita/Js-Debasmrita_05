//function Basic Syntax.
function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("B");
    console.log("U");
}

//sayMyName//---> refernece
sayMyName()//-->execution.


function Add (num1, num2) {
   console.log( num1 + num2);
}
//const results= Add(7,9);
//console.log(results);//undefined.

function Add (num1, num2) {
   // let results=num1 + num2;
   // return results;

   return num1+num2;
}
const results= Add(7,9);
//console.log(results);//16


//IMPORTANT
function LoginUserMssg (username = "sAM"/*DEFAULT VALUE , WILL EXECUTE IF NOTHING IS PASSED AS ASRGUMENT*/){
   if(username===undefined){
      console.log("pleasee enter a username");
      return
      }
   return `${username}, just logged in`
}
// console.log(LoginUserMssg("Debu"));//Debu, just logged In
// console.log(LoginUserMssg());



function CalcCartPrice(val1,val2,...num){// in this case val1=200, val2=330,,, and rest of the items are added to array because of rest operator.
   return num;
}
// console.log(CalcCartPrice(200,330,400,3000));

const user= {
   name: "Debu",
   age: 20,
   price: 200
}

function handleObject(anyObject){
   console.log(`username is ${anyObject.name} and age is ${anyObject.age} and price is ${anyObject.price}`);
   
}
//handleObject(user);

handleObject({
   username: "Sam",
   age: 20,
   price:888
})

const myNewArray = [200,400,300]
function returnSecondVal (getArray){
   return getArray[1];
}
console.log(`Return secong value, ${returnSecondVal(myNewArray)}`);
