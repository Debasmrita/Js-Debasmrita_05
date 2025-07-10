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
console.log(user.getUserDetails)