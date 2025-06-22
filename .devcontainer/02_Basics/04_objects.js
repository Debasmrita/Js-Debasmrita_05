// const tinderUser = new Object()// singleton object
// //const tinderUser ={};// non-singelton object


// tinderUser.id= "123abc";
// tinderUser.name= "Debu";
// tinderUser.isLoggedIn = false;

// //console.log(tinderUser);


// const regularUser ={
//     email: "debu@gmail.com",
//     fullNmae: {
//         userfullname: {
//             firdtName: "Debu",
//             lastname:"Banerjee"
//         }
//     }
// }

// //console.log(regularUser.fullNmae.userfullname.firdtName);

// const obj1= {
//     1: "a",
//     2: "b",
// }
// const obj2= {
//     3: "c",
//     4: "d",
// }

// //const obj3 = Object.assign({}, obj1 , obj2); // important!

// const obj3= {...obj1,...obj2}// use spread and chill!
// console.log(obj3);

// const user= [
//     {
//         id: 1,
//         email: "d@gmail.com"
//     },
//     {

//     },
//     {

//     }
// ]

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// de-Structuring

const course={
    coursename: "js in hindi",
    price: "999",
    courseInztructor: "Debu-DiDi"
}

const {courseInztructor}= course
console.log(courseInztructor);//Debu-DiDi

//API---> Apna Kaam, dalo kisi aur ki Upar!!
//Json format---
// {
//     "name": "DEbu",
//     "coursename": "js in hindi",
//     "price": "free"
// }

