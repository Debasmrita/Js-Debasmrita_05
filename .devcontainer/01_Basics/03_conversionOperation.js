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
console.log(stringNumber);//33
console.log(typeof(stringNumber));//String
