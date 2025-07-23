// //ES6

// class User{
//     constructor (username, email, password){
//         this.username= username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     CapUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const Debu= new User("DebuDiDi", "Debu@gmail.com", "12344")
// console.log(Debu.encryptPassword());
// console.log(Debu.CapUsername());


//Behind the Scences


function User(username, email, password){
    this.username=username;
    this.password=password;
    this.email=email;
}

User.prototype.encryptPassword= function(){
    return `${this.password}abc`
}
User.prototype.CapUsername= function(){
    return `${this.username.toUpperCase()}`
}
const debu= new User("chai","chai@gmail.com","1234")

console.log(debu.encryptPassword());
console.log(debu.CapUsername());
