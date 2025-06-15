let score= "33 abc"// string as in "...", if not within " " , then a number.

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);//number
console.log(ValueInNumber); // NaN


//"33" => 33
//"33abc" => NaN ( but type is number)
// true=> 1; false=>0

let isLoggedIn = 1

let  booleanIsLoggesdIn = Boolean(isLoggedIn)

console.log(booleanIsLoggesdIn) // true.

//1 => true; 0=>false;
//""=> false
//"Debu"=> true

let strNumber=33
let stringNumber = String(strNumber)
console.log(stringNumber);
console.log(typeof(stringNumber))

console.log("************Operations**************")

/* console.log(2+2);//4
console.log(2*2);//4
console.log(2**2);//4
console.log(9/3);//3
console.log(3%2);//1
*/

//String concatenation
str1="helllo";
str2=" Debu";
str3=str1 + str2;
console.log(str3);//helllo Debu


//Confusion arrises when...
// console.log("1" + 2);//12 (reading as String)
// console.log(1 + "2");//12 (reading as String)
// console.log("1" + "2");//12 (reading as String)
// console.log("1" + 2 + 2);//122 (reading as String)
// console.log(1 + 2 + "2");//32(int this case the first two are taken as numbers , and then gets concatenated with string "2")


//precedence ----> prefix and postfix.
let gameCounter=100;
// gameCounter++;//101
++gameCounter;//101
console.log(gameCounter);

// chatgpt link for TypeConversion: 
//https://chatgpt.com/share/684e4fe6-a2ec-8013-a1c1-5de4c0680e44

//mdn link for prefix and postfix:-   
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment