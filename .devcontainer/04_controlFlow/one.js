// //if
// if("2"===2)
// {
//     console.log("executed");
// }
// else{
//     console.log("false");
//     let value= Number("556a");
//     console.log(value);//NaN    
// }
//Some operators:-
// >,<,>=,<=,!=,!==,===,==
// let temp=46;
// if(temp<=50)
// {
//     console.log("temp is less");
// }else{
//     console.log("temp is high");
    
// }

// const score=200;
// if(score>100){
//     const power= "fly";
//     console.log(`User Power: ${power}`);
// }
//console.log(`User Power: ${power}`);


const balance=1000;
// if(balance>500) console.log("test"),
// console.log("test2");// implicit code

// 


let debitCardUSER = true;
let userLoggedIn=  true;
let emailLoggedIn
let googleLoggedIn= false;
if(debitCardUSER && userLoggedIn && 2==3){
    console.log("executed");
}
else if(googleLoggedIn || emailLoggedIn){
    console.log("not, executed");
}
else{
    console.log("idk")
}