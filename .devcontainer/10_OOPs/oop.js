const user = {
    username: "Debu",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
       //console.log("Got user details")
       //console.log(`username: ${this.username}`)
       console.log(this)
    }

}
console.log(user.username)
//console.log(user.getUserDetails)
console.log(this)// {}


// Constructor Function

//const promise1= new Promise()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }

    //return this {gets defined implicitly}
}

const user1= new User("DebuDidi", 23, true)
const user2= new User("uDidi", 2, true)
console.log(user1.constructor)
console.log(user2)