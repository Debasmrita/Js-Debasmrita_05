const name= "Debu";
const repoCount= 50;

//console.log(name + repoCount + "Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hite-sh-hc')

console.log(gameName[0]);//h
console.log(gameName.__proto__);//{}


console.log(gameName.length);//8
// console.log(String(gameName).toUpperCase());
// console.log(String(gameName).charAt(2));
// console.log(String(gameName).indexOf('b'));

const newString = gameName.substring(0,3);
console.log(newString)//hit

const anotherString = gameName.slice(-8,3);
console.log(anotherString)//hit

const StringOne = "        Debu        ";
console.log(StringOne);//             Debu             
console.log(StringOne.trim());//Debu

const url = "https://debu.com/debuBanerjee%202005"

console.log(url.replace('%20', '-'));

console.log(gameName.split('-'))
