const myNums=[1,2,3,4]
let initialValue=0
// const myTotal= myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}   currval:${currval}`)
//     return acc+currval;
// }, initialValue)

// const myTotal= myNums.reduce( (acc, currval)=>{
//     return acc+currval;
// }, initialValue)
// console.log(myTotal);


const shopCard= [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "AAP",
        price: 13999
    },
    {
        itemName: "Data Analysts",
        price: 12999
    },
]

let initialvalue=0;

const totalPrice = shopCard.reduce( (acc, currval)=> {
    return acc+ currval.price;

},initialValue);
console.log(totalPrice);

