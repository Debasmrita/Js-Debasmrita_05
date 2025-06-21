const marvel_heroes = ["Captain America","Thor","iron-man"];
const dc_heroes= ["Superman","flash","batman"];

// marvel_heroes.push(dc)
// console.log(marvel_heroes)

// const conact= marvel_heroes.concat(dc_heroes);
// console.log(conact);

 //spread operator
// const all_new_heros= [...marvel_heroes,...dc_heroes]

// console.log(all_new_heros)



const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Debu"));//false
//Now, how to convert it to array???

console.log(Array.from("Debu"));//[ 'D', 'e', 'b', 'u' ]

//now, what will happen if we introduce an object within an array
console.log(Array.from({name: "Debu",
    age:20,
    Stram: "it"
})); // interresting ---> [] {it will return am empty array, as we have not mentioned wheather to create an array wrt keys, values,etc}.

const score1= 100;
const score2= 200;
const score3= 300;

console.log(Array.of(score1, score2, score3));


