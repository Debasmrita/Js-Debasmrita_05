//arrays

const myArr=[0, 1,2,3,4,5];

const myHeroes=["Captain America", "iron-man"];

const myArr2=new Array(1,2,3,4)
console.log(myArr[1]);//1

//Array Methods

myArr.push(6);/*[
  0, 1, 2, 3,
  4, 5, 6
]*/
myArr.push(7);/*[
  0, 1, 2, 3,
  4, 5, 6, 7
]*/ 

myArr.pop();/*[
  0, 1, 2, 3,
  4, 5, 6
]*/

myArr.unshift(9);/*[
  9, 0, 1, 2,
  3, 4, 5
]*/

myArr.shift();//[ 0, 1, 2, 3, 4, 5 ]


console.log(myArr.includes(3));// returns value in true or false.



const newArr= myArr.join()
console.log(newArr);//0,1,2,3,4,5{changes the array to string seperated by comma(,)}
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]


//Slice &  Splice

console.log("A", myArr);//A [ 0, 1, 2, 3, 4, 5 ]
const myAr= myArr.slice(1,3);
console.log("A1", myAr)//A1 [ 1, 2 ]

console.log("----------------------------")

console.log("B",myArr);//B [ 0, 1, 2, 3, 4, 5 ]
const myAr1= myArr.splice(1,3);
console.log("B1", myAr1);//B1 [ 1, 2, 3 ]
console.log("B2",myArr); //{original array gets modified}  B2 [ 0, 4, 5 ]



