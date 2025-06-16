const name= "Debu";
const repoCount= 50;

//console.log(name + repoCount + "Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Debu_js')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(String(gameName).toUpperCase());
console.log(String(gameName).charAt(2));
console.log(String(gameName).indexOf('b'));

const newString = gameName.substring(0,3);
console.log(newString)

const anotherString = gameName.slice(-8,3);
console.log(anotherString)