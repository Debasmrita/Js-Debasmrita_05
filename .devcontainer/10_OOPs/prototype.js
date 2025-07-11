// let myName= "Debu     "

// console.log(myName.truelength)



let myHeros=["thor","spiderman"]

let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power: ${this.spiderman}`);
        
    }
}

Object.prototype.debu =function(){
    console.log("Debu is present in all object")
}

Array.prototype.heyDebu= function(){
    console.log("HEllo Debu")
}

myHeros.debu();
myHeros.heyDebu()

//inheritance
const User={
    username: "rai",
    work: "google"
}
const teacher= {
    makeVideo: true
}

const TeachingSupport= {
    isAvailble: false
}

const TASupport= {
    DPPAvailble: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
teacher.__proto__=User

//Mordern

Object.setPrototypeOf(TeachingSupport, teacher)

let myName= "Debu     "
String.prototype.truelength= function(){
    console.log(myName.truelength)
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`true length is${this.trim().length}`)

}
 
anotherUserName.trueLength()
