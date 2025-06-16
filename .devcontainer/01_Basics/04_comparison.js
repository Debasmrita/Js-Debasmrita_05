// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2"> 1);//true
// console.log("02">1);//true

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

//this happens because ==(equality check) and comparison >=, <=, >,<. works differently from each other.
// comparison operator changes the value of null to a number , treating it as zero.
console.log(undefined==0);//false (also false for > <)


//we must avoid null and undefined types as it creates confusion. Moreover, in case of null its become difficult to understand when the value of null is getting converted to 0 and NaN.



//=== --> strict check as it also checks the data type.
console.log("2"===2);// false
