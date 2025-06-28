// // const arr=["js","ruby","java","python","cpp"]
// // const values= arr.forEach( (item) => {
// //    console.log(item);
// //     return item;
// // })
// // console.log(values);
// // for-each never returns any value


const myNums= [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (num)=> num >4);
// //console.log(newNums);


// const newNums1= myNums.filter( (nums)=>{
//     return nums>5;
// })
// console.log(newNums1);


//by using forEach loop.
// Newnum= [];

// myNums.forEach( (nums)=>{
//     if(nums>4){
//         Newnum.push(nums)
//     }
// })
//console.log(Newnum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks= books.filter( (bk)=> bk.genre === "History" )
   userBooks= books.filter( (bk)=> bk.publish >= 2000 && bk.edition>= 1996)
  console.log(userBooks);
  

