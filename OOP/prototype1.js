// let name="animesh     "
// let name1="deepu      "
// //console.log(name.trim().length);

let myheros=["thor", "spiderman"];

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower: function(){
        console.log(`spider-man power is ${this.spiderman}`);
    }
}
Object.prototype.animesh=function(){
    console.log(`this function will be available for all object`);
}

Array.prototype.hey=function(){
    console.log(`this is made for array`);
}
heropower.animesh()
myheros.animesh()
myheros.hey()


// inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let name2="animesh    "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`the true lenth is : ${this.trim().length}`);
}

name2.truelength();