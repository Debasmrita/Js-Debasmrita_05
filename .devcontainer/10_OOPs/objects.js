function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2

console.log(multiplyBy5(5));//25
console.log(multiplyBy5.power);//2
console.log(multiplyBy5.prototype);//{}
// Function is an object!
//Array and String ------> Object ------> null({})

//this---> sets a current context

function createUser(username, score){
    this.username= username;
    this.score= score;
}

createUser.prototype.increment= function (){
    this.score++;
}
createUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);
}

const debu= createUser("hello", 123);
const deuDidi= createUser("bye",345);

debu.printMe()