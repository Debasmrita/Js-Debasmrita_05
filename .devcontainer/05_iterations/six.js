// const arr=["js","ruby","java","python","cpp"]
// const values= arr.forEach( (item) => {
//    // console.log(item);
//     return item;
// })
// console.log(values);
// for-each never returns any value


const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums= myNums.filter( (num)=> num >4);
console.log(newNums);


const newNums1= myNums.filter( (nums)=>{
    return nums>5;
})
console.log(newNums1);


//by using forEach loop.
Newnum= [];

myNums.forEach( (nums)=>{
    if(nums>4){
        Newnum.push(nums)
    }
})
console.log(Newnum)



