const user={
    username: "Debu",
    price: 333,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this);
        
    }
}
//user.welcomeMessage();
console.log(this);//{}


// function chaa(){
//     let username= "debu"
//     console.log(this.username)
// }
// chaa(); //we cannot use this in function.


// const chai =  ()=>{
//     let username= "debu"
//     console.log(this.username);
    
// }
// chai()

// Arrow Function
const addtwo= (num1, num2) => {
    return num1+num2;
}
console.log(addtwo(2,3));


// implicit arrow func
const addthree = (num3,num4) => (num3+num4)
console.log(addthree(4,5));


const addfour = (num3,num4) => ({username: "Debu"})
console.log(addfour());
