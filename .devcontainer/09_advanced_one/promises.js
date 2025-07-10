const promise1= new Promise(function(resolve, reject){
    //Do and async task
    //DB calls, cyptography, network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed");
}) //--->resolve

new Promise(function(resolve, reject){
    setTimeout(function (){
        console.log('Async is done(2)');
        resolve();
    },2000)
}).then(function(){
    console.log("Done Async resolved")
})

const promise3= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Debu", email:"Debu@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})



const promise4= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:"Debu-DiDi", password: "Abc"})
        }
        else{
            reject('ERRoR: Something went Wrong')
        }
        
    },2000)
})
 promise4
.then((user)=>{
   console.log(user)
   return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Finally the promise is either resolved or rejected.")
})



const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Debu-Didi", email:"Debu@gmail.com"})
        }
        else{
            reject('Error!')
        }
    },1000)
});

async function consumePromise5(){
    try{
        const response= await promise5
    console.log(response)
    } catch (error){
        console.log(error)
    }
} 
consumePromise5()


// async function getallUsers(){
//   try{const response= await fetch('https://jsonplaceholder.typicode.com/users')
//   const data= await response.json()
//   console.log(data)
// } catch(error){
//     console.log("Errro:", error)
// }
// }
//getallUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})