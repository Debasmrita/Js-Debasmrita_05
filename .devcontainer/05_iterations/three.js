// for of

// const arr= [1,2,3,4,5]
// for (const val of arr) {
//     console.log(val)
// }

// const str=["debu", "ram", "jogu"]
// for (const arr of str) {
//     console.log(arr)
// }

const greetings= "hello World!"
for (const greet of greetings) {
    if(greet == " "){
        console.log("space detected");
        continue;
    }
    console.log(greet)
}



//Maps

const map = new Map()
map.set('IN',"India");
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map)

for (const [key, value] of map) {
    console.log(`${key}:${value}`);
    
}


const myObj={
    game1: "nfs",
    game2: "subwaySurfer"
}
for (const [key,value] of myObj) {
    console.log(`${key}:${value}`)
}// object cant be iterable in this manner