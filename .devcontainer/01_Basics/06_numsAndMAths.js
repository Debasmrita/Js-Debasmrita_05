const score = 400;
console.log(score);//400

const balance = new Number(100);
console.log(balance);//[Number: 100]


console.log(balance.toString());//100
console.log(typeof(balance.toString()));//string
console.log((balance.toString()).length);//3

console.log(balance.toFixed(2));//100.00

const otherNumber = 23.66698;
console.log(otherNumber.toPrecision(2));//24
console.log(otherNumber.toPrecision(3));//23.7


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++

console.log(Math); // Object [Math] {}

console.log(Math.abs(-4)); // 4 {basically changes, the negative value to positive only!}
console.log(Math.round(4.3));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.3));//5
console.log(Math.floor(4.9));//4

console.log(Math.min(4,3,5,6,9));//3
console.log(Math.max(4,3,5,6,9));//9

console.log(Math.random());// will only provide random value between 0 and 1
console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max-min+1)) + min ));
