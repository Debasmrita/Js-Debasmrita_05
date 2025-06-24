// For loop.
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i%2==0){
//       console.log(element);
//     }

    
    
// }

for (let i = 0; i < 10; i++) {
    //console.log(`Outer loop ${i}`);
    
    for (let j = 0; j < 10; j++) {
        const element = j;
        //console.log(`Inner loop ${j} and Inner loop ${i}`);
        //console.log(i + '*' + j + "=" + ( i*j));
        
    }
    const element = i;
    
}

const myarr= ["flash", "batman", "superman"]
//console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    
    
  //  console.log(element);
}



//keywords-> break and continue

// for (let index = 0; index <= 20; index++) {
//     const element = index;
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
    
// }


for (let index = 0; index <= 20; index++) {
    const element = index;
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
    
    
}

